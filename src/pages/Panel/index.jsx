import "./styles.scss";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dash from "./icons/dash.svg";
import drop from "./icons/drop.svg";
import dropblack from "./icons/dropblack.svg";
import calendar from "./icons/calendar.svg";
import auth from "./icons/auth.svg";
import charts from "./icons/charts.svg";
import msg from "./icons/msg.svg";
import eye from "./icons/eye.svg";
import msgs from "./icons/msgs.svg";
import inbox from "./icons/inbox.svg";
import cart from "./icons/cart.svg";
import people from "./icons/people.svg";
import bag from "./icons/bag.svg"
import invoice from "./icons/invoice.svg";
import task from "./icons/task.svg";
import form from "./icons/forms.svg";
import profile from "./icons/profile.svg";
import Group from "./icons/Group.svg";
import search from "./icons/search.svg";
import pfp from "./icons/pfp.svg";
import notify from "./icons/notifications.svg";
import { TextField, Grid } from "@mui/material";

export default function Panel() {
  return (
    <main id="panel" className="flex justify-between w-[100svw] h-[100svh] bg-white">
      <div className="w-[300px] h-[100svh] bg-[#433878] flex flex-col p-3 gap-1 overflow-hidden">
        <div className="flex items-center gap-4 my-5">
          <img src={Group} className="h-8" p-3 />
          <h1 className=" text-[white] text-3xl font-bold mr-[25px]">DUDO</h1></div>
        <div className="bg-[#433878]"><Typography className="text-[#ffe1ff] text-2xl">Menu</Typography>
          <details className="list-none text-[white]">
            <summary className="flex p-2 hover:bg-[#7e60bf] gap-3 cursor-pointer"><img src={dash} className="h-6" />
              <div className="flex gap-14">
                <p>Dashboard</p>
                <img src={drop} className="h-6" />
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
          <li className="list-none text-[white] "><a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#"><img src={inbox} className="h-6" />
            Inbox</a></li>
          <li className="list-none text-[white]"><a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#"><img src={invoice} className="h-6" />Invoice</a></li>
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
      <div className="grow w-full flex flex-col">
        <div id="nav" className="mb-10">
          <div className="flex justify-between m-3">
            <div className="flex items-center gap-2">
              <img src={search} className="h-6" />
              <TextField className="w-[600px]" label="Search" variant="outlined" />
            </div>
            <div className="flex item-center space-x-2 items-center">
              <img src={notify} className="h-6" />
              <img src={msgs} className="h-6" />
              <div className="flex gap-3 items-center">
                <div className="flex flex-col">
                  <p>Rida Tayyab</p>
                  <p className="text-xs">UX Designer</p>
                </div>
                <img src={pfp} className="h-10" />
                <img color="black" src={dropblack} className="h-6" />
              </div>
            </div>
          </div>
        </div>

        <div id="view" className="flex mx-5">
          <Grid container spacing={2}>
            {[
              { id: 1, value: "$3.456K", label: "Views", image: eye },
              { id: 2, value: "$7.892K", label: "Clicks", image: cart },
              { id: 3, value: "$5.123K", label: "Signups", image: bag },
              { id: 4, value: "$9.456K", label: "Shares", image: people }
            ].map((item,index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <div className="border-[2px] flex-col p-6 h-[200px] ml-6 space-y-11">
                  <img src={item.image} className="h-7" /> 
                  <div className="flex flex-col">
                    <Typography variant="h4">{item.value}</Typography> 
                    <Typography >{item.label}</Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>


      </div>
    </main>
  );
}