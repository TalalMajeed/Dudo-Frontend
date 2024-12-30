import { useState } from "react";
import { Layout, Input, List, Avatar, Button, Typography } from "antd";
import {
  VideoCameraOutlined,
  PhoneOutlined,
  SendOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";

const { Sider, Content } = Layout;
const { TextArea } = Input;

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "Zoe", text: "Hi Zoe!", isMine: false, time: "10:00 AM" },
    {
      sender: "Zoe",
      text: "I am pleased to announce that on this beautiful magical day of the Fall Equinox...",
      isMine: false,
      time: "10:02 AM",
    },
    {
      sender: "Zoe",
      text: "We have released the first version of the chat-ui-kit-react library.",
      isMine: false,
      time: "10:03 AM",
    },
    { sender: "You", text: "That's great news! You must be very excited.", isMine: true, time: "10:05 AM" },
    {
      sender: "You",
      text: "I am so proud of your team :) Good luck with your new product!",
      isMine: true, time: "10:06 AM",
    },
    { sender: "Zoe", text: "Thank you :)", isMine: false, time: "10:07 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setMessages([
        ...messages,
        { sender: "You", text: newMessage, isMine: true, time: formattedTime },
      ]);
      setNewMessage("");
    }
  };

  return (
    <Layout style={{ height: "100vh", background: "#f4f5fc" }}>
      {/* Sidebar */}
      <Sider
        theme="light"
        width={300}
        style={{
          background: "#fff",
          borderRight: "1px solid #e8e8e8",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            padding: "16px",
            background: "#a48ff4",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Contacts
        </div>
        <List
          itemLayout="horizontal"
          dataSource={[
            { name: "Lilly", status: "Always on holidays" },
            { name: "Zoe", status: "Active 10 mins ago", active: true },
          ]}
          renderItem={(contact) => (
            <List.Item
              style={
                contact.active
                  ? {
                      background: "#f0f5ff",
                      borderLeft: "4px solid #a48ff4",
                    }
                  : null
              }
            >
              <List.Item.Meta
                avatar={<Avatar style={{ backgroundColor: "#a48ff4" }}>{contact.name[0]}</Avatar>}
                title={<Typography.Text strong>{contact.name}</Typography.Text>}
                description={
                  <span style={{ color: "#888" }}>{contact.status}</span>
                }
              />
            </List.Item>
          )}
        />
      </Sider>

      {/* Main Chat Area */}
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#f9f9fb",
        }}
      >
        {/* Chat Header */}
        <div
          style={{
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#a48ff4",
            color: "#fff",
            borderBottom: "1px solid #e8e8e8",
            height: "56px"
          }}
        >
          <Typography.Title
            level={4}
            style={{ margin: 0, color: "#fff", fontWeight: "bold" }}
          >
            Zoe
          </Typography.Title>
     
        </div>

        {/* Messages Section */}
        <div
          style={{
            flex: 1,
            padding: "24px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: msg.isMine ? "flex-end" : "flex-start",
                gap: "4px",
              }}
            >
              <div
                style={{
                  background: msg.isMine ? "#a48ff4" : "#f0f0f0",
                  color: msg.isMine ? "#fff" : "#000",
                  padding: "12px 16px",
                  borderRadius: "18px",
                  maxWidth: "60%",
                  wordWrap: "break-word",
                }}
              >
                {msg.text}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#888",
                  textAlign: msg.isMine ? "right" : "left",
                }}
              >
                {msg.time}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div
          style={{
            padding: "16px",
            borderTop: "1px solid #e8e8e8",
            background: "#fff",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            <TextArea
              placeholder="Type your message..."
              autoSize={{ minRows: 1, maxRows: 3 }}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              style={{
                flex: 1,
                borderRadius: "8px",
                padding: "10px",
                fontSize: "16px",
              }}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<SendOutlined />}
              onClick={sendMessage}
              style={{
                background: "#6c5ce7",
                border: "none",
                width: "48px",
                height: "48px",
              }}
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Chat;
