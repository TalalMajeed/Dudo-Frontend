import React from 'react';
import ChatScreen from './chatscreen.jsx';

export default function Chat() {
  return (
    <div className="flex h-screen">
      <div className="flex-grow">
        <ChatScreen />
      </div>
    </div>
  );
}
