import React from 'react';

const SideBar = ({ contacts, handleContactClick, activeContact }) => {
  return (
    <div className="w-60 bg-[#4e2f7f] p-4">
      <div className="font-semibold text-2xl mb-4 text-white">Contacts</div>
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            onClick={() => handleContactClick(contact.id)} // Handle contact click
            className={`p-2 rounded-lg cursor-pointer ${activeContact === contact.id ? "bg-[white] text-[#4e2f7f]" : "bg-[#4e2f7f] text-white"}`}
          >
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
