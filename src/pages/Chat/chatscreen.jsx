import React, { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import SideBar from "./sidebar";

const useQueue = (maxSize) => {
  const [queue, setQueue] = useState([]);

  const enqueue = (item) => {
    setQueue((prevQueue) => {
      const newQueue = [...prevQueue, item];
      return newQueue.length > maxSize ? newQueue.slice(1) : newQueue;
    });
  };

  const getQueue = () => queue;

  return { enqueue, getQueue };
};

const ChatScreen = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const { enqueue, getQueue } = useQueue(50);
  const [contacts, setContacts] = useState([
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Alex Johnson" },
  ]);
  const [activeContact, setActiveContact] = useState("1"); // Default active contact (John Doe)
  const [messages, setMessages] = useState({
    "1": [
      { text: "Hello! How can I assist you today?", sender: "contact" },
      { text: "Hi! I have a question about my account.", sender: "user" },
    ],
    "2": [
      { text: "Hi there! How can I help you?", sender: "contact" },
      { text: "I need help with my order.", sender: "user" },
    ],
    "3": [
      { text: "Hey! Need assistance?", sender: "contact" },
      { text: "What are the latest features?", sender: "user" },
    ],
  });

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
    };

    ws.onmessage = (event) => {
      const receivedMessage = event.data;
      console.log("Message received:", receivedMessage);

      enqueue({ text: receivedMessage, sender: "contact" });
      setMessages((prevMessages) => {
        const updatedMessages = { ...prevMessages };
        updatedMessages[activeContact] = [
          ...updatedMessages[activeContact],
          { text: receivedMessage, sender: "contact" },
        ];
        return updatedMessages;
      });
    };

    return () => {
      ws.close();
    };
  }, [enqueue, activeContact]);

  const handleSendMessage = () => {
    if (message.trim()) {
      enqueue({ text: message, sender: "user" });
      setMessages((prevMessages) => {
        const updatedMessages = { ...prevMessages };
        updatedMessages[activeContact] = [
          ...updatedMessages[activeContact],
          { text: message, sender: "user" },
        ];
        return updatedMessages;
      });
      setMessage("");

      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(message);
      } else {
        console.log("WebSocket is not connected.");
      }
    }
  };

  const handleContactClick = (contactId) => {
    setActiveContact(contactId); // Update the active contact when clicked
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar
        contacts={contacts}
        handleContactClick={handleContactClick} // Pass handler to the Sidebar
        activeContact={activeContact}
      />

      {/* Chat Window */}
      <div className="flex-grow p-4 overflow-y-auto bg-gray-50 flex flex-col">
        <div className="text-xl font-semibold mb-4">
          {contacts.find((contact) => contact.id === activeContact)?.name}
        </div>
        <div className="space-y-4 flex-grow overflow-y-auto">
          {messages[activeContact]?.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.sender === "user" ? "bg-[#4e2f7f] text-white" : "bg-white text-[#4e2f7f]"
                }`}
              >
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div className="p-2 bg-gray-200 flex gap-2 mt-4">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4e2f7f]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
          />
          <IconButton
            sx={{
              backgroundColor: "#4e2f7f",
              color: "white",
              "&:hover": {
                backgroundColor: "#7e60bf",
              },
              padding: "8px",
            }}
            onClick={handleSendMessage}
          >
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
