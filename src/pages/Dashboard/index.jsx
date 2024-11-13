import React, { useState } from "react";
import "./styles.scss";
import Typography from '@mui/material/Typography';
import dash from "./icons/dash.svg";
import calendar from "./icons/calendar.svg";
import msg from "./icons/msg.svg";
import task from "./icons/task.svg";
import logo from "../../assets/logo.png";
import Group from "./icons/Group.svg";
import kanban2 from "./icons/kanban2.svg";
import settings from "./icons/settings.svg";
import meet from "./icons/meet.svg";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default function Dashboard() {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <main id="dashboard" className="flex justify-between w-[100svw] h-[100svh] bg-white">
      <div className={`w-[${isSidebarExpanded ? '300px' : '80px'}] h-[100svh] bg-[#4e2f7f] opacity- flex flex-col p-3 gap-1 transition-all duration-500 ease-in-out`}>
        <div className="flex items-start">
          <IconButton aria-label="Menu" className="text-white" onClick={toggleSidebar}>
            <MenuIcon style={{ fontSize: '30px', color: '#FFFFFF' }} />
          </IconButton>
        </div>
        <div className="bg-[#4e2f7f] flex flex-col flex-grow text-xl mt-6">
          <li className="list-none text-[white]">
            <a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#">
              <img src={dash} className="h-6" /> {isSidebarExpanded && 'Dashboard'}
            </a>
          </li>
          <li className="list-none text-[white]">
            <a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#">
              <img src={calendar} className="h-6" /> {isSidebarExpanded && 'Calendar'}
            </a>
          </li>
          <li className="list-none text-[white]">
            <a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#">
              <img src={kanban2} className="h-6" /> {isSidebarExpanded && 'Kanban Board'}
            </a>
          </li>
          <li className="list-none text-[white]">
            <a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#">
              <img src={task} className="h-6" /> {isSidebarExpanded && 'Tasks'}
            </a>
          </li>
          <li className="list-none text-[white]">
            <a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#">
              <img src={msg} className="h-6" /> {isSidebarExpanded && 'Messages'}
            </a>
          </li>
          <li className="list-none text-[white]">
            <a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#">
              <img src={meet} className="h-6" /> {isSidebarExpanded && 'Meetings'}
            </a>
          </li>
          <li className="list-none text-[white] mt-auto">
            <a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#">
              <img src={settings} className="h-6" /> {isSidebarExpanded && 'Settings'}
            </a>
          </li>
        </div>
      </div>
      <div className="grow w-full flex flex-col">
        <div id="nav" className="bg-slate-50">
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-4">
              <img src={logo} className="h-16 p-1" />
              <h1 className="text-[#433878] text-4xl font-bold">DUDO</h1>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <TextField
                className="w-[450px]"
                label="Search"
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: '7px',
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton aria-label="search" color="inherit">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <div className="flex justify-between items-center">
                <Typography variant="h6" className="p-3 text-xs">Dudo Frontend</Typography>
                <IconButton aria-label="notifications" color="inherit">
                  <NotificationsIcon />
                </IconButton>
                <IconButton aria-label="profile" color="inherit">
                  <AccountCircleIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f5f5f5] h-[100svh] p-3">
          Components will be rendered
        </div>
      </div>
    </main>
  );
}
