import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card, Col, Row, Button, Modal, Form, Input, Select, DatePicker, Popconfirm, Tooltip, Avatar, Divider } from "antd";
import { DeleteOutlined, UserOutlined, CommentOutlined } from "@ant-design/icons";
import "./styles.scss";

const ItemType = {
  TASK: "TASK",
};

const initialData = [
  {
    title: "Complete Documentation",
    description: "Finish the project documentation.",
    status: "In Progress",
    assignedTo: "user1",
    assignTime: "2024-12-28 09:00",
    endTime: "2024-12-29 17:00",
    comments: [],
  },
  {
    title: "Code Review",
    description: "Review the pull request for bug fixes.",
    status: "Todo",
    assignedTo: "user2",
    assignTime: "2024-12-27 09:00",
    endTime: "2024-12-28 12:00",
    comments: [],
  },
  {
    title: "Deployment",
    description: "Deploy the latest build to production.",
    status: "Done",
    assignedTo: "user3",
    assignTime: "2024-12-25 10:00",
    endTime: "2024-12-26 15:00",
    comments: [],
  },
];

const DraggableTask = ({ task, moveTask, deleteTask, addComment }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.TASK,
    item: { task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);
  const [commentForm] = Form.useForm();

  const handleAddComment = (values) => {
    addComment(task.title, values.comment);
    setIsCommentModalVisible(false);
    commentForm.resetFields();
  };

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        marginBottom: "10px",
      }}
    >
      <Card
        title={task.title}
        extra={
          <>
            <Tooltip title="Add Comment">
              <Button
                type="text"
                icon={<CommentOutlined />}
                size="small"
                onClick={() => setIsCommentModalVisible(true)}
              />
            </Tooltip>
            <Popconfirm
              title="Are you sure you want to delete this task?"
              onConfirm={() => deleteTask(task.title)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="text"
                icon={<DeleteOutlined />}
                size="small"
                danger
              />
            </Popconfirm>
          </>
        }
        style={{ position: "relative" }}
      >
        <p>{task.description}</p>
        <div style={{ position: "absolute", bottom: 10, right: 10 }}>
          <Tooltip
            title={
              <>
                <div>Assigned to: {task.assignedTo}</div>
                <div>Deadline: {task.endTime}</div>
              </>
            }
          >
            <Avatar
              size="small"
              icon={<UserOutlined />}
              style={{ backgroundColor: "#a48ff4", cursor: "pointer", marginBottom: "15px" }}
            />
          </Tooltip>
        </div>

        {/* Display comments */}
        <div>
          {task.comments.map((comment, index) => (
            <p key={index} style={{ fontSize: "12px", margin: "5px 0" }}>
              <strong>Comment:</strong> {comment}
            </p>
          ))}
        </div>

        {/* Comment Modal */}
        <Modal
          title="Add Comment"
          visible={isCommentModalVisible}
          onCancel={() => setIsCommentModalVisible(false)}
          footer={null}
        >
          <Form form={commentForm} onFinish={handleAddComment} layout="vertical">
            <Form.Item
              label="Comment"
              name="comment"
              rules={[{ required: true, message: "Please enter a comment" }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Comment
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </div>
  );
};

const DroppableColumn = ({ status, tasks, moveTask, deleteTask, addComment, showCreateModal }) => {
  const [, drop] = useDrop({
    accept: ItemType.TASK,
    drop: (item) => moveTask(item.task, status),
  });

  return (
    <Col span={8}>
      <div ref={drop} className="kanban-column">
        {/* Column Heading with Create Button */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <Button
            type="text"
            icon={<span style={{ fontSize: "20px", fontWeight: "bold" }}>+</span>}
            onClick={showCreateModal}
            style={{
              marginRight: "8px",
              cursor: "pointer",
              color: "#4caf50",
              fontSize: "20px",
            }}
          />
          <h3 className="column-title" style={{ margin: 0 }}>{status}</h3>
        </div>
        <Divider />
        {tasks.map((task) => (
          <DraggableTask
            key={task.title}
            task={task}
            moveTask={moveTask}
            deleteTask={deleteTask}
            addComment={addComment}
          />
        ))}
      </div>
    </Col>
  );
};

export default function Kanban() {
  const [tasks, setTasks] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const moveTask = (task, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.title === task.title ? { ...t, status: newStatus } : t
      )
    );
  };

  const deleteTask = (title) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.title !== title));
  };

  const addComment = (title, comment) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.title === title ? { ...t, comments: [...t.comments, comment] } : t
      )
    );
  };

  const handleCreateTask = (values) => {
    const newTask = {
      ...values,
      assignTime: values.assignTime.format("YYYY-MM-DD HH:mm"),
      endTime: values.endTime.format("YYYY-MM-DD HH:mm"),
      comments: [],
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsModalVisible(false);
    form.resetFields();
  };

  const columns = ["Todo", "In Progress", "Done"];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="kanban-board">
        <Row gutter={16}>
          {columns.map((status) => (
            <DroppableColumn
              key={status}
              status={status}
              tasks={tasks.filter((task) => task.status === status)}
              moveTask={moveTask}
              deleteTask={deleteTask}
              addComment={addComment}
              showCreateModal={() => setIsModalVisible(true)}
            />
          ))}
        </Row>

        <Modal
          title={
            <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "600", margin: "0" }}>
              Create New Task
            </h2>
          }
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form
            form={form}
            onFinish={handleCreateTask}
            layout="vertical"
            requiredMark="optional"
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please enter a title" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please enter a description" }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="Status"
              name="status"
              rules={[{ required: true, message: "Please select a status" }]}
            >
              <Select>
                {columns.map((status) => (
                  <Select.Option key={status} value={status}>
                    {status}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Assigned To"
              name="assignedTo"
              rules={[{ required: true, message: "Please enter an assignee" }]}
            >
              <Input />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Assign Time"
                  name="assignTime"
                  rules={[{ required: true, message: "Please select a start time" }]}
                >
                  <DatePicker showTime style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="End Time"
                  name="endTime"
                  rules={[{ required: true, message: "Please select an end time" }]}
                >
                  <DatePicker showTime style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Create Task
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </DndProvider>
  );
}
