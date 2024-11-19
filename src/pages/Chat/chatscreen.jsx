import React, { useState } from 'react';
import background from "./bg.jpeg";  // Assuming the image is located in the same folder
import SendIcon from '@mui/icons-material/Send';
import {IconButton } from "@mui/material";

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'contact' },
    { text: 'Hi! I have a question about my account.', sender: 'user' },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white p-4 shadow-lg flex gap-2 items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <h2 className="text-black text-xl font-semibold">John Doe</h2>
      </div>

      <div
        className="flex-grow p-4 overflow-y-auto bg-gray-50 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}  // Correct usage of the background image
      >
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${msg.sender === 'user' ? 'bg-[#4e2f7f] text-white' : 'bg-white text-[#4e2f7f]'}`}
              >
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-gray-200 flex gap-2">
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
  );
};

export default ChatScreen;
