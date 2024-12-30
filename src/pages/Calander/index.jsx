import React, { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Modal, Button, Form, Input, DatePicker, Popconfirm, Row, Col, Card, Typography } from "antd";

const { Title, Text } = Typography;
const localizer = momentLocalizer(moment);

export default function MeetingCalendar() {
  const [events, setEvents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [form] = Form.useForm();

  const handleAddMeeting = (values) => {
    const newEvent = {
      title: values.title,
      start: new Date(values.startTime),
      end: new Date(values.endTime),
      allDay: false,
    };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleDeleteMeeting = (eventToDelete) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event !== eventToDelete));
    setSelectedEvent(null);
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Card style={{ borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
          Meeting Calendar
        </Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Button
            type="primary"
            onClick={() => setIsModalVisible(true)}
            style={{ borderRadius: "5px", fontWeight: "bold" }}
          >
            Add Meeting
          </Button>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Button
              onClick={() => document.querySelector(".rbc-toolbar .rbc-btn-group button:first-child").click()}
              style={{ borderRadius: "5px" }}
            >
              Back
            </Button>
            <Button
              onClick={() => document.querySelector(".rbc-toolbar button:nth-child(2)").click()}
              style={{ borderRadius: "5px" }}
            >
              Today
            </Button>
            <Button
              onClick={() => document.querySelector(".rbc-toolbar .rbc-btn-group button:last-child").click()}
              style={{ borderRadius: "5px" }}
            >
              Next
            </Button>
          </div>
        </div>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: 500,
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          selectable
          onSelectEvent={(event) => setSelectedEvent(event)}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: "#4caf50",
              color: "#fff",
              borderRadius: "5px",
              padding: "5px",
              cursor: "pointer",
            },
          })}
        />
      </Card>

      {/* Add Meeting Modal */}
      <Modal
        title={<Title level={3} style={{ textAlign: "center" }}>Add Meeting</Title>}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <Form form={form} onFinish={handleAddMeeting} layout="vertical">
            <Form.Item
              label="Meeting Title"
              name="title"
              rules={[{ required: true, message: "Please enter a title" }]}
            >
              <Input placeholder="Enter meeting title" />
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Start Time"
                  name="startTime"
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
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ fontWeight: "bold", borderRadius: "5px" }}
              >
                Add Meeting
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>

      {/* Delete Meeting Confirmation */}
      {selectedEvent && (
        <Modal
          title={<Title level={3}>Delete Meeting</Title>}
          visible={!!selectedEvent}
          onCancel={() => setSelectedEvent(null)}
          footer={[
            <Popconfirm
              title="Are you sure you want to delete this meeting?"
              onConfirm={() => handleDeleteMeeting(selectedEvent)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>,
            <Button onClick={() => setSelectedEvent(null)}>Cancel</Button>,
          ]}
        >
          <Text>Meeting: {selectedEvent.title}</Text>
          <p>Start Time: {moment(selectedEvent.start).format("YYYY-MM-DD HH:mm")}</p>
          <p>End Time: {moment(selectedEvent.end).format("YYYY-MM-DD HH:mm")}</p>
        </Modal>
      )}
    </div>
  );
}
