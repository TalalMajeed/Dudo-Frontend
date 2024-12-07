import React, { useState, useEffect, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import SideBar from "./sidebar";

const useQueue = (maxSize) => {
  const [queue, setQueue] = useState([]);

  const enqueue = (item) => {
    setQueue((prevQueue) => {
      const newQueue = [...prevQueue, item];
      return newQueue.length > maxSize ? newQueue.slice(newQueue.length - maxSize) : newQueue;
    });
  };

  const dequeueAll = () => queue;

  const clearQueue = () => setQueue([]);

  return { enqueue, dequeueAll, clearQueue };
};

const ChatScreen = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [contacts, setContacts] = useState([
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Alex Johnson" },
  ]);
  const [activeContact, setActiveContact] = useState("1");
  const { enqueue, dequeueAll, clearQueue } = useQueue(100); // Queue with a max size of 100 messages
  const [messages, setMessages] = useState({});
  const chatEndRef = useRef(null);

  // Fetch messages from backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`http://localhost:8080/messages/${activeContact}`);
        const data = await response.json();

        // Populate queue with fetched messages
        clearQueue();
        data.forEach((msg) => enqueue(msg));
        setMessages((prevMessages) => ({ ...prevMessages, [activeContact]: data }));
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
  }, [activeContact, enqueue, clearQueue]);

  // WebSocket setup
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
      const receivedMessage = JSON.parse(event.data);
      console.log("Message received:", receivedMessage);

      enqueue(receivedMessage);
      setMessages((prevMessages) => {
        const updatedMessages = { ...prevMessages };
        const contactMessages = updatedMessages[activeContact] || [];
        updatedMessages[activeContact] = [...contactMessages, receivedMessage];
        return updatedMessages;
      });
    };

    return () => {
      ws.close();
    };
  }, [activeContact, enqueue]);

  const handleSendMessage = async () => {
    if (message.trim()) {
      const newMessage = { text: message, sender: "user", timestamp: new Date().toISOString() };

      enqueue(newMessage);
      setMessages((prevMessages) => {
        const updatedMessages = { ...prevMessages };
        const contactMessages = updatedMessages[activeContact] || [];
        updatedMessages[activeContact] = [...contactMessages, newMessage];
        return updatedMessages;
      });

      setMessage("");

      // Send message to backend
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(newMessage));
      } else {
        console.log("WebSocket is not connected.");
      }

      try {
        await fetch(`http://localhost:8080/messages/${activeContact}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMessage),
        });
      } catch (error) {
        console.error("Failed to send message to backend:", error);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleContactClick = (contactId) => {
    setActiveContact(contactId);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar
        contacts={contacts}
        handleContactClick={handleContactClick}
        activeContact={activeContact}
      />

      {/* Chat Window */}
      <div className="flex-grow p-4 overflow-y-auto bg-gray-50 flex flex-col">
        <div className="text-xl font-semibold mb-4 p-2 border-b-2 border-b-[#4e2f7f]">
          {contacts.find((contact) => contact.id === activeContact)?.name}
        </div>
        <div className="space-y-4 flex-grow overflow-y-auto">
          {dequeueAll().map((msg, index) => (
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
          <div ref={chatEndRef}></div>
        </div>

        {/* Input Field */}
        <div className="p-2 bg-gray-200 flex gap-2 mt-4">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4e2f7f]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
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
