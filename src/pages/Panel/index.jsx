import "./styles.scss";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dash from "./icons/dash.svg";
import drop from "./icons/drop.svg";
import calendar from "./icons/calendar.svg";
import auth from "./icons/auth.svg";
import charts from "./icons/charts.svg";
import msg from "./icons/msg.svg";
import inbox from "./icons/inbox.svg";
import invoice from "./icons/invoice.svg";
import task from "./icons/task.svg";
import form from "./icons/forms.svg";
import profile from "./icons/profile.svg";
import logo from "../../assets/logo.png";
import Group from "./icons/Group.svg";

export default function Panel() {
  return (
    <main id="panel" className="flex justify-between w-[100svw] h-[100svh] bg-white">
      <div className="w-[300px] h-[100svh] bg-[#433878] flex flex-col p-3 gap-1 overflow-hidden">
        <div className="flex items-center gap-4 my-5">
          <img src={Group} className="h-8"/>
          <h1 className=" text-[white] text-3xl font-bold mr-[25px]">DUDO</h1></div>
        <div className="bg-[#433878]"><Typography className="text-[#ffe1ff] text-2xl">Menu</Typography>
          <details className="list-none text-[white]">
            <summary className="flex p-2 hover:bg-[#7e60bf] gap-3 cursor-pointer"><img src={dash} className="h-6" />  
              <div className="flex gap-14">
                <p>Dashboard</p>
                <img src={drop} className="h-6"/>
              </div>
            </summary>
            <ul className="pl-5 py-2">
              <li className="p-1"><a href="#" className="hover:font-bold">Message 1</a></li>
              <li className="p-1"><a href="#" className="hover:font-bold">Message 2</a></li>
            </ul>
          </details>
          <li className="list-none text-[white] "><a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#"><img src={calendar} className="h-6" />Calendar</a></li>
          <li className="list-none text-[white]"><a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#"><img src={profile} className="h-6" />Profile</a></li>
          <li className="list-none text-[white]"><a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#"><img src={task} className="h-6" />Tasks</a></li>
          <li className="list-none text-[white]"><a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#"><img src={form} className="h-6" />Forms</a></li>
        </div>
        <div className="bg-[#433878]"><Typography className="text-[#ffe1ff]" text-2xl>Support</Typography>
          <li className="list-none text-[white] border-"><a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#"><img src={msg} className="h-6" />
            Messages</a></li>
          <li className="list-none text-[white] "><a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#"><img src={inbox} className="h-6"/>
            Inbox</a></li>
          <li className="list-none text-[white]"><a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#"><img src={invoice} className="h-6"/>Invoice</a></li>
        </div>
        <div className="bg-[#433878]">
          <Typography className="text-[#ffe1ff] text-2xl">Others</Typography>
          <details className="list-none text-[white]">
            <summary className="flex p-2 hover:bg-[#7e60bf] gap-3 cursor-pointer">
              <img src={charts} className="h-6" />
              <div className="flex gap-24">Charts
                <img src={drop} className="h-6" />
              </div>
            </summary>
            <ul className="pl-5">
              <li className="p-1"><a href="#" className="hover:font-bold">Basic</a></li>
              <li className="p-1"><a href="#" className="hover:font-bold">Advanced</a></li>
            </ul>
          </details>

          <details className="list-none text-[white]">
            <summary className="flex p-2 hover:bg-[#7e60bf] gap-3 cursor-pointer">
              <img src={auth} className="h-6" />
              <div className="flex gap-10">Authentication
                <img src={drop} className="h-6" />
              </div>
            </summary>
            <ul className="pl-5 py-2">
              <li className="p-1"><a href="#" className="hover:font-bold">Basic</a></li>
              <li className="p-1"><a href="#" className="hover:font-bold">Advanced</a></li>
            </ul>
          </details>
        </div>
      </div>
      <div className="grow w-full">
        LEFT
      </div>
    </main>
  );
}