import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card, Col, Row, Button, Modal, Form, Input, Select, DatePicker, Popconfirm, Tooltip, Avatar } from "antd";
import { DeleteOutlined, UserOutlined } from "@ant-design/icons";
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

const DraggableTask = ({ task, moveTask, deleteTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.TASK,
    item: { task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

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
        }
        style={{ position: "relative" }}
      >
        <p>{task.description}</p>
        <div style={{ position: "absolute", bottom: 10, right: 10 }}>
          <Tooltip title={`Assigned to: ${task.assignedTo}`}>
            <Avatar
              size="small"
              icon={<UserOutlined />}
              style={{ backgroundColor: "#87d068", cursor: "pointer" }}
            />
          </Tooltip>
        </div>
      </Card>
    </div>
  );
};

const DroppableColumn = ({ status, tasks, moveTask, deleteTask }) => {
  const [, drop] = useDrop({
    accept: ItemType.TASK,
    drop: (item) => moveTask(item.task, status),
  });

  return (
    <Col span={8}>
      <div ref={drop} className="kanban-column">
        <h3>{status}</h3>
        {tasks.map((task) => (
          <DraggableTask
            key={task.title}
            task={task}
            moveTask={moveTask}
            deleteTask={deleteTask}
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
        <Button
          type="primary"
          style={{ marginBottom: 20 }}
          onClick={() => setIsModalVisible(true)}
        >
          Create Task
        </Button>

        <Row gutter={16}>
          {columns.map((status) => (
            <DroppableColumn
              key={status}
              status={status}
              tasks={tasks.filter((task) => task.status === status)}
              moveTask={moveTask}
              deleteTask={deleteTask}
            />
          ))}
        </Row>

        <Modal
          title="Create New Task"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleCreateTask} layout="vertical">
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
            <Form.Item
              label="Assign Time"
              name="assignTime"
              rules={[{ required: true, message: "Please select a start time" }]}
            >
              <DatePicker showTime />
            </Form.Item>
            <Form.Item
              label="End Time"
              name="endTime"
              rules={[{ required: true, message: "Please select an end time" }]}
            >
              <DatePicker showTime />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </DndProvider>
  );
}
