import React, { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Modal, Button, Form, Input, DatePicker, Popconfirm } from "antd";

const localizer = momentLocalizer(moment);

export default function MeetingCalendar() {
  const [events, setEvents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [form] = Form.useForm();

  // Handle adding a new meeting
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

  // Handle deleting a meeting
  const handleDeleteMeeting = (eventToDelete) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event !== eventToDelete));
    setSelectedEvent(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Meeting Calendar</h2>
      <Button
        type="primary"
        onClick={() => setIsModalVisible(true)}
        style={{ marginBottom: "20px" }}
      >
        Add Meeting
      </Button>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 500,
          backgroundColor: "#fff",
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
          },
        })}
      />

      {/* Add Meeting Modal */}
      <Modal
        title="Add Meeting"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAddMeeting} layout="vertical">
          <Form.Item
            label="Meeting Title"
            name="title"
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Start Time"
            name="startTime"
            rules={[{ required: true, message: "Please select a start time" }]}
          >
            <DatePicker showTime style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="End Time"
            name="endTime"
            rules={[{ required: true, message: "Please select an end time" }]}
          >
            <DatePicker showTime style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add Meeting
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Delete Meeting Confirmation */}
      {selectedEvent && (
        <Modal
          title="Delete Meeting"
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
          <p>Meeting: {selectedEvent.title}</p>
          <p>
            Start Time: {moment(selectedEvent.start).format("YYYY-MM-DD HH:mm")}
          </p>
          <p>
            End Time: {moment(selectedEvent.end).format("YYYY-MM-DD HH:mm")}
          </p>
        </Modal>
      )}
    </div>
  );
}