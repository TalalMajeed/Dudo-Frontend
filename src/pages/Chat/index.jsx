import React from 'react';
import ChatScreen from './chatscreen.jsx';
import SideBar from './sidebar.jsx';

export default function Chat() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-grow">
        <ChatScreen />
      </div>
    </div>
  );
}
