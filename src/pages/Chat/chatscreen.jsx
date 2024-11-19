import React, { useState, useEffect } from 'react';
import background from "./bg.jpeg"; 
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from "@mui/material";

const ChatScreen = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState(''); 
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'contact' },
    { text: 'Hi! I have a question about my account.', sender: 'user' },
  ]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    setSocket(ws);

    ws.onopen = () => {
      console.log('Connected to WebSocket');
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket');
    };

    ws.onmessage = (event) => {
      const receivedMessage = event.data;
      console.log('Message received:', receivedMessage);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: receivedMessage, sender: 'contact' },
      ]);
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim() && socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: 'user' },
      ]);
      setMessage('');
    } else {
      console.log('WebSocket is not connected or message is empty.');
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white p-4 shadow-lg flex gap-2 items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <h2 className="text-black text-xl font-semibold">John Doe</h2>
      </div>

      {/* Messages Area */}
      <div
        className="flex-grow p-4 overflow-y-auto bg-gray-50 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-[#4e2f7f] text-white'
                    : 'bg-white text-[#4e2f7f]'
                }`}
              >
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Field */}
      <div className="p-4 bg-gray-200 flex gap-2">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4e2f7f]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />

        {/* Send Button */}
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
  );
};

export default ChatScreen;
