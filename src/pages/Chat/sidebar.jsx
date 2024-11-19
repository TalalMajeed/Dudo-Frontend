import React from "react";

const SideBar = () => {
  const contacts = [
    { name: "John Doe", id: 1 },
    { name: "Jane Smith", id: 2 },
    { name: "Alex Johnson", id: 3 },
  ];

  return (
    <div className="w-64 bg-[#4e2f7f] min-h-screen p-4 shadow-lg">
      <div className="text-2xl font-bold mb-5 text-white border-b pb-3">Contacts</div>
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="flex items-center p-2 bg-white text-[#4e2f7f] rounded-lg shadow-sm hover:bg-purple-100 transition-shadow duration-200"
          >
            <div className="w-8 h-8 bg-[#4e2f7f] rounded-full flex items-center justify-center text-lg font-semibold text-white">
              {contact.name.charAt(0)}
            </div>
            <p className="text-lg ml-4 font-medium">{contact.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
