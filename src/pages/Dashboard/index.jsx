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
import down from "./icons/down.svg";
import up from "./icons/up.svg";
import chart from "./icons/chart.svg";
import pfp from "./icons/pfp.svg";
import notify from "./icons/notifications.svg";
import { TextField, Grid } from "@mui/material";

export default function Dashboard() {
  return (
    <main id="dashboard" className="flex justify-between w-[100svw] h-[100svh] bg-white">
      <div className="w-[300px] h-[100svh] bg-[#433878] flex flex-col p-3 gap-1 overflow-y-auto no-scrollbar">
        <div className="flex items-center gap-4 mt-5 mb-10">
          <img src={Group} className="h-8" p-3 />
          <h1 className=" text-[white] text-3xl font-bold mr-[25px]">DUDO</h1></div>
        <div className="bg-[#433878]"><Typography className="text-[#ffe1ff] text-2xl p-2">Menu</Typography>
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
        <div className="bg-[#433878]"><Typography className="text-[#ffe1ff] text-2xl p-2">Support</Typography>
          <li className="list-none text-[white] border-"><a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#"><img src={msg} className="h-6" />
            Messages</a></li>
          <li className="list-none text-[white] "><a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#"><img src={inbox} className="h-6" />
            Inbox</a></li>
          <li className="list-none text-[white]"><a className="flex p-2 hover:bg-[#7e60bf] gap-3" href="#"><img src={invoice} className="h-6" />Invoice</a></li>
        </div>
        <div className="bg-[#433878]">
          <Typography className="text-[#ffe1ff] text-2xl p-2">Others</Typography>
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
        <div id="nav" className="bg-slate-50">
          <div className="flex justify-between m-3">
            <div className="flex items-center gap-2">
              <img src={search} className="h-6" />
              <TextField className="w-[600px]" label="Search" variant="outlined" InputProps={{
                style: {
                  borderRadius: '50px',
                },
              }} />
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
        <div className="bg-[#f5f5f5] h-[100svh] p-3">
          <div id="view" className="flex mx-5">
            <Grid container spacing={2}>
              {[
                { id: 1, value: "$3.456K", label: "Total Views", image: eye, rate: "0.43%", increase: true },
                { id: 2, value: "$45.2K", label: "Total Profit", image: cart, rate: "4.35%", increase: true },
                { id: 3, value: "2.450", label: "Total Product", image: bag, rate: "2.59%", increase: true },
                { id: 4, value: "3.456", label: "Total Users", image: people, rate: "0.95%", increase: false }
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <div className="border-[1px] p-4 h-[150px] rounded-md shadow-md flex flex-col justify-between bg-white">
                    {/* Top section with icon */}
                    <div className="flex items-center justify-between">
                      <img src={item.image} className="h-8" alt={item.label} />
                      <div className={`text-sm ${item.increase ? 'text-green-500' : 'text-red-500'} flex items-center`}>
                        <Typography>{item.rate}</Typography>
                        <img
                          src={item.increase ? up : down}
                          className={`h-4 ml-1 ${item.increase ? '' : 'rotate-180'}`}
                          alt={item.increase ? 'increase' : 'decrease'}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Typography variant="h5" className="font-bold">{item.value}</Typography>
                      <Typography variant="subtitle2" color="textSecondary">{item.label}</Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div className=" m-1 flex">
            <div className="m-5 border-2">
              <Typography className="p-2" variant="h4">Visitors Analytics</Typography>
              <svg width="380" height="295.3666666666667" viewBox="0 0 380 295.3666666666667" style={{ background: 'transparent' }}>
                <g transform="translate(44.66666666666666, 0)">
                  <defs>
                    <clipPath id="gridRectMaskh6gdwj8">
                      <rect width="298.6666666666667" height="316.6666666666667" x="-3" y="-1" fill="#fff"></rect>
                    </clipPath>
                  </defs>
                  <g className="apexcharts-pie">
                    <circle r="88.89674796747968" cx="146.33333333333334" cy="146.33333333333334" fill="transparent"></circle>
                    <g className="apexcharts-slices">
                      {/* Desktop Slice (65%) */}
                      <path d="M 146.33333333333334 9.569105691056905 A 136.76422764227644 136.76422764227644 0 0 1 214.71544715447158 264.7746288005027 L 190.7817073170732 223.3201753869934 A 88.89674796747968 88.89674796747968 0 0 0 146.33333333333334 57.43658536585366 L 146.33333333333334 9.569105691056905 z" fill="#433878" stroke="#ffffff"></path>
                      {/* Tablet Slice (34%) */}
                      <path d="M 214.71544715447158 264.7746288005027 A 136.76422764227644 136.76422764227644 0 0 1 43.96383897777021 237.02479151972892 L 79.7931620022173 205.28278115449046 A 88.89674796747968 88.89674796747968 0 0 0 190.7817073170732 223.3201753869934 L 214.71544715447158 264.7746288005027 z" fill="#C7C0E3" stroke="#ffffff"></path>
                      {/* Mobile Slice (45%) */}
                      <path d="M 43.96383897777021 237.02479151972892 A 136.76422764227644 136.76422764227644 0 0 1 82.7758276412985 25.23462387367242 L 105.0209546335107 67.61917218455375 A 88.89674796747968 88.89674796747968 0 0 0 79.7931620022173 205.28278115449046 L 43.96383897777021 237.02479151972892 z" fill="#6D4E8D" stroke="#ffffff"></path>
                      {/* Unknown Slice (12%) */}
                      <path d="M 82.7758276412985 25.23462387367242 A 136.76422764227644 136.76422764227644 0 0 1 146.30946347274147 9.569107774095187 L 146.3178179239486 57.436586719828554 A 88.89674796747968 88.89674796747968 0 0 0 105.0209546335107 67.61917218455375 L 82.7758276412985 25.23462387367242 z" fill="#D1B0D9" stroke="#ffffff"></path>
                    </g>
                  </g>
                </g>
              </svg>

              {/* Analysis Section */}
              <div className="p-4">
                <ul style={{ listStyleType: 'none', paddingLeft: '0' }} className="flex gap-2">
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ width: '10px', height: '10px', backgroundColor: '#433878', borderRadius: '50%', marginRight: '8px' }}></span>
                    <strong>Desktop:</strong> 65%
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ width: '10px', height: '10px', backgroundColor: '#C7C0E3', borderRadius: '50%', marginRight: '8px' }}></span>
                    <strong>Tablet:</strong> 34%
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ width: '10px', height: '10px', backgroundColor: '#6D4E8D', borderRadius: '50%', marginRight: '8px' }}></span>
                    <strong>Mobile:</strong> 45%
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ width: '10px', height: '10px', backgroundColor: '#D1B0D9', borderRadius: '50%', marginRight: '8px' }}></span>
                    <strong>Unknown:</strong> 12%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}