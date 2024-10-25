import "./styles.scss";
import Loader from "../../features/loader/loader";
import { Button, TextField, Card } from "@mui/material";


export default function Index() {
    return <main id="index">
        <section className="flex place-content-between items-center m-[15px]">
            <h1 className="text-3xl font-bold w-[210px]">DUDO</h1>
            <div className="flex gap-[40px]">
                <a className="text-lg" href="#">How it works</a>
                <a className="text-lg" href="#">About</a>
                <a className="text-lg" href="#">Docs</a>
            </div>
            <div className="flex gap-[10px] w-[210px]">
                <Button variant="outlined" className="!normal-case !text-base w-[100px] h-[45px]">Sign In</Button>
                <Button variant="contained" className="!normal-case !text-base w-[100px] h-[45px]">Sign Up</Button>
            </div>
        </section>
        <hr />
        <section className="mt-[80px] text-center flex items-center flex-col">
            <h1 className="text-[3.5rem] font-semibold">Collaborate smarter with </h1>
            <h1 className="text-[3.5rem] font-semibold">streamlined workflow</h1>
            <div className="flex gap-[10px] mt-[2.5rem]">
                <TextField variant="outlined" label="Enter your email" className="w-[400px] h-[50px]" />
                <Button variant="contained" className="!normal-case !text-base w-[120px] h-[55px] mt-[10px]">Subscribe</Button>
            </div>
            <p className="mt-[30px] flex items-center gap-[5px] text-[#333]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                Privacy and security at every step of integration</p>
        </section>
        <section className="flex flex-col items-center justify-center m-[50px]">
            <div>
                <div className="flex gap-[20px]">
                    <div className="flex">
                        <div className="w-[320px] h-[320px] bg-[#eeeeee] border-solid border-[1px] border-[#d6d6d6] rounded-[20px] overflow-hidden">
                            <div className="flex items-center justify-between mr-[15px] ml-[15px] h-[17%]">
                                <p>Calendar</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div className="bg-[#fff] h-[83%] p-[15px] flex flex-col">
                                <p className="text-1xl  text-[#333]">Zoom Meeting</p>
                                <p className="text-3xl font-medium mt-[0.7rem]">Monday, 21st Oct</p>
                                <p className="text-1xl text-[#333] mt-[0.7rem]">10:00 - 11:00 AM</p>
                                <hr className="mt-5" />
                                <div className="grow"></div>
                                <div className="flex justify-between items-center mb-2">
                                    <Button variant="outlined" className="!normal-case !text-base w-[120px] h-[45px] ">Confirm</Button>
                                    <div className="flex gap-[10px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col custom-gradient w-[320px] h-[320px] border-solid border-[1px] border-[#d1dee5] rounded-[20px] overflow-hidden">
                        <div className="flex justify-between ml-[20px] mr-[20px] items-center">
                            <p className="custom-3x font-semibold text-[5.5rem] text-[#254673] ">3X</p>
                            <p className="text-[#254673]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                </svg>

                            </p>
                        </div>
                        <div className="grow"></div>
                        <div className="m-[20px] text-[#254673]">
                            <p>
                                3 Times more Productive!!
                            </p>
                            <p>
                                Manage Teams with Efficiency
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-[120px] bg-[#fff] border-solid border-[1px] border-[#d6d6d6] rounded-[20px] overflow-hidden mt-5 flex justify-between p-5">
                    <div className="flex flex-col justify-center gap-[10px]">
                        <p className="text-2xl font-semibold">Shortcuts</p>
                        <p>Simplify Access to Management</p>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <div className="w-[60px] h-[60px] bg-[#fff] border-solid border-[1px] border-[#d6d6d6] rounded-[20px] flex justify-center items-center text-[#333]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                        </div>
                        <div className="w-[60px] h-[60px] bg-[#fff] border-solid border-[1px] border-[#d6d6d6] rounded-[20px] flex justify-center items-center text-[#333]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>

                        </div>
                        <div className="w-[60px] h-[60px] bg-[#fff] border-solid border-[1px] border-[#d6d6d6] rounded-[20px] flex justify-center items-center text-[#333]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>;
}