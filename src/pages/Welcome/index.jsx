import "./styles.scss";
import { Button, Input, List } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function HomeScreen() {
    return (
        <>
            <section className="mt-[80px] text-center flex items-center flex-col">
                <h1 className="text-[3.5rem] font-semibold">
                    Collaborate smarter with
                </h1>
                <h1 className="text-[3.5rem] font-semibold">
                    streamlined workflow
                </h1>
                <div className="flex gap-[10px] mt-[2.5rem]">
                    <Input
                        variant="outlined"
                        placeholder="Enter your Email"
                        className="w-[400px] h-[50px]"
                    />
                    <Button
                        variant="contained"
                        className="!normal-case !text-base w-[120px] h-[50px]"
                    >
                        Subscribe
                    </Button>
                </div>
                <p className="mt-[30px] flex items-center gap-[5px] text-[#333]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                        />
                    </svg>
                    Privacy and security at every step of integration
                </p>
            </section>
            <section className="flex flex-col items-center justify-center m-[50px]">
                <div>
                    <div className="flex gap-[20px]">
                        <div className="flex">
                            <div className="w-[320px] h-[320px] bg-[#eeeeee] border-solid border-[1px] border-[#d6d6d6] rounded-[20px] overflow-hidden">
                                <div className="flex items-center justify-between mr-[15px] ml-[15px] h-[17%]">
                                    <p>Calendar</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>
                                <div className="bg-[#fff] h-[83%] p-[15px] flex flex-col">
                                    <p className="text-1xl  text-[#333]">
                                        Zoom Meeting
                                    </p>
                                    <p className="text-3xl font-medium mt-[0.7rem]">
                                        Monday, 21st Oct
                                    </p>
                                    <p className="text-1xl text-[#333] mt-[0.7rem]">
                                        10:00 - 11:00 AM
                                    </p>
                                    <hr className="mt-5" />
                                    <div className="grow"></div>
                                    <div className="flex justify-between items-center mb-2">
                                        <Button
                                            variant="outlined"
                                            className="!normal-case !text-base w-[120px] h-[45px] "
                                        >
                                            Confirm
                                        </Button>
                                        <div className="flex gap-[10px]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col custom-gradient w-[320px] h-[320px] border-solid border-[1px] border-[#d1dee5] rounded-[20px] overflow-hidden">
                            <div className="flex justify-between ml-[20px] mr-[20px] items-center">
                                <p className="custom-3x font-semibold text-[5.5rem] text-[#4d1a9c] ">
                                    3X
                                </p>
                                <p className="text-[#4d1a9c]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </p>
                            </div>
                            <div className="grow"></div>
                            <div className="m-[20px] text-[#4d1a9c]">
                                <p>3 Times more Productive!!</p>
                                <p>Manage Teams with Efficiency</p>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                                    />
                                </svg>
                            </div>
                            <div className="w-[60px] h-[60px] bg-[#fff] border-solid border-[1px] border-[#d6d6d6] rounded-[20px] flex justify-center items-center text-[#333]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                                    />
                                </svg>
                            </div>
                            <div className="w-[60px] h-[60px] bg-[#fff] border-solid border-[1px] border-[#d6d6d6] rounded-[20px] flex justify-center items-center text-[#333]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function AboutUs() {
    return (
        <section className="flex flex-col items-center justify-center w-[100%] mt-[50px] mb-[50px]">
            <div className="flex flex-col items-center w-[90%] justify-center max-w-[1000px]">
                <h1 className="text-4xl font-semibold">About Us</h1>
                <p className="text-[#333] mt-8">
                    Dudo is a platform that helps you manage your team with
                    efficiency. It is a platform that allows you to collaborate
                    smarter with streamlined workflow. Dudo is a platform that
                    helps you manage your team with efficiency. It is a platform
                    that allows you to collaborate smarter with streamlined
                    workflow.
                </p>
                <p className="text-[#333] mt-8">
                    Dudo empowers your team to achieve more with less effort. It
                    provides intuitive tools to enhance communication, ensuring
                    that everyone stays on the same page. Dudo simplifies
                    project management with features designed to organize tasks,
                    track progress, and deliver results seamlessly. It is the
                    ultimate platform for boosting productivity and fostering
                    collaboration in any work environment.
                </p>
                <h1 className="text-4xl font-semibold mt-[50px]">
                    Meet Our Team
                </h1>
                <p className="text-[#333] mt-8">
                    We are a Team of four dedicated CS Students, pursuing a
                    College Degree at SEECS, NUST University, in Islamabad
                    Pakistan
                </p>
                <div className="flex gap-[20px] mt-5 flex-col lg:flex-row">
                    <div className="lg:w-[25%] items-center justify-center h-[350px] bg-[#fff] border-solid border-[1px] border-[#d6d6d6] rounded-[20px] overflow-hidden mt-5 flex flex-col p-5">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQGZClph5qI9VQ/profile-displayphoto-shrink_200_200/B4DZPQNXMaHMAY-/0/1734364984703?e=1740614400&v=beta&t=0vPXsr-ZkKUEnm1yEhdV5LNKt2uoTeTe5kL5X5IhVbA"
                            alt="Talal"
                            className="w-[140px] h-[140px] rounded-[20px] ml-auto mr-auto"
                        />
                        <div className="text-2xl mt-5">Talal Majeed</div>
                        <div className="text-center">
                            Team Lead & Backend Developer
                        </div>
                        <Button
                            href="https://www.linkedin.com/in/talalmajeed/"
                            target="_blank"
                            className="w-[100%] mt-5"
                        >
                            LinkedIn
                        </Button>
                    </div>
                    <div className="lg:w-[25%] items-center justify-center h-[350px] bg-[#fff] border-solid border-[1px] border-[#d6d6d6] rounded-[20px] overflow-hidden mt-5 flex flex-col p-5">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQFIsPa6SyRYzg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714756784798?e=1740614400&v=beta&t=gfBNSgQTuvG5tc2E9kYoOKQv8lN0lgej9SPbwiFB4FE"
                            alt="Ezn"
                            className="w-[140px] h-[140px] rounded-[20px] ml-auto mr-auto"
                        />
                        <div className="text-2xl mt-5">Ezn Zaidi</div>
                        <div className="text-center">
                            Frontend Logic & Socket Developer
                        </div>
                        <Button
                            href="https://www.linkedin.com/in/ezn-zaidi/"
                            target="_blank"
                            className="w-[100%] mt-5"
                        >
                            LinkedIn
                        </Button>
                    </div>
                    <div className="lg:w-[25%] items-center justify-center h-[350px] bg-[#fff] border-solid border-[1px] border-[#d6d6d6] rounded-[20px] overflow-hidden mt-5 flex flex-col p-5">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQHoOwoxmObYAw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702798069123?e=1740614400&v=beta&t=5G5myTlef3W2v6oVmzIPyNMnPxN2rT9yVjO4TNZ12n8"
                            alt="Noor"
                            className="w-[140px] h-[140px] rounded-[20px] ml-auto mr-auto"
                        />
                        <div className="text-2xl mt-5">Noor Fatima</div>
                        <div className="text-center">
                            Backend Algorithms & Cloud Developer
                        </div>
                        <Button
                            href="https://www.linkedin.com/in/noor-fatima-aa07632a1/"
                            target="_blank"
                            className="w-[100%] mt-5"
                        >
                            LinkedIn
                        </Button>
                    </div>
                    <div className="lg:w-[25%] items-center justify-center h-[350px] bg-[#fff] border-solid border-[1px] border-[#d6d6d6] rounded-[20px] overflow-hidden mt-5 flex flex-col p-5">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQFi2W1BlRCmbQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701767552340?e=1740614400&v=beta&t=H1ZuN4FOUywkjAgVOGA63Oyxiy3axaEEbeZp-MWxaZQ"
                            alt="Rida"
                            className="w-[140px] h-[140px] rounded-[20px] ml-auto mr-auto"
                        />
                        <div className="text-2xl mt-5">Rida Tayyab</div>
                        <div className="text-center">
                            Frontend & Data Structures Developer
                        </div>
                        <Button
                            href="https://www.linkedin.com/in/rida-tayyab-40168728b/"
                            target="_blank"
                            className="w-[100%] mt-5"
                        >
                            LinkedIn
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Documentation() {
    const frontend = [
        "React",
        "React-Router",
        "Ant Design",
        "Hero Icons",
        "React Router",
        "Web Sockets",
        "Vite Server",
    ];

    const backend = [
        "Spring Boot",
        "Spring Server",
        "Jakarta EE",
        "Web Sockets",
        "SSL Verification",
        "JWT Authentication",
        "AWS S3 & EC2",
        "GitHub Actions",
    ];

    return (
        <section className="flex flex-col items-center justify-center w-[100%] mt-[50px] ">
            <div className="flex flex-col justify-center w-[90%] max-w-[1000px] mb-10">
                <h1 className="text-4xl font-semibold text-center">
                    Documentation
                </h1>
                <p className="text-[#333] mt-10">
                    This section contains the detailed documentation for Dudo
                    Application. This is an Open Source Project developed by a
                    Team of 4 Students at NUST University for their End Semester
                    DSA Project
                </p>
                <h4 className="text-2xl font-semibold mt-10 mb-5">
                    Source Code
                </h4>
                <p>
                    This project is built using two Main GitHub Repositories:
                    <div className="flex flex-col gap-[10px] mt-5 mb-5">
                        <Button className="w-[200px]">
                            Frontend Repository
                        </Button>
                        <Button className="w-[200px]">
                            Backend Repository
                        </Button>
                    </div>
                </p>
                <p>
                    The Backend Repository is not public (Currently) due to
                    containing SSL Keys for Pipeline. Will be shifted Soon to
                    make it public.
                </p>
                <p>The Frontend Repository is public (Open Source)</p>
                <h4 className="text-2xl font-semibold mt-10 mb-5">
                    Technolgoies
                </h4>
                <p>
                    This project is built using the following set of frontend
                    frameworks & technologies:
                </p>
                <div className="flex flex-col gap-[10px] mt-5 mb-5">
                    <List
                        bordered
                        dataSource={frontend}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                </div>
                <p>
                    This project is built using the following set of backend
                    frameworks & technologies:
                </p>
                <div className="flex flex-col gap-[10px] mt-5 mb-5">
                    <List
                        bordered
                        dataSource={backend}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                </div>
            </div>
        </section>
    );
}

export default function Index() {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(-1);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const location = useLocation();
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const section = searchParams.get("section");
        if (section === "home") {
            setPage(0);
        } else if (section === "about") {
            setPage(1);
        } else if (section === "documentation") {
            setPage(2);
        } else {
            setPage(0);
        }
    }, [location]);

    return (
        <main id="index">
            <section className="flex items-center justify-between p-4 border-b border-gray-300">
                <h1 className="text-2xl md:w-[200px] font-bold">DUDO</h1>
                <div className="hidden md:flex gap-6">
                    <Button
                        onClick={() => {
                            navigate("/welcome?section=home");
                        }}
                        type="link"
                        className="text-black text-lg"
                    >
                        Home Screen
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/welcome?section=about");
                        }}
                        type="link"
                        className="text-black text-lg"
                    >
                        About Us
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/welcome?section=documentation");
                        }}
                        type="link"
                        className="text-black text-lg"
                    >
                        Documentation
                    </Button>
                </div>
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-black focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={
                                    isMenuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16m-7 6h7"
                                }
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex gap-4  md:w-[200px]">
                    <Button
                        variant="outlined"
                        className="text-base w-24 h-10"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Button>
                    <Button
                        type="primary"
                        variant="contained"
                        className="text-base w-24 h-10"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </Button>
                </div>
            </section>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-100 p-4 space-y-2">
                    <Button
                        onClick={() => {
                            navigate("/welcome?section=home");
                            setIsMenuOpen(false);
                        }}
                        type="link"
                        className="block w-full text-left text-black text-lg"
                    >
                        Home Screen
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/welcome?section=about");
                            setIsMenuOpen(false);
                        }}
                        type="link"
                        className="block w-full text-left text-black text-lg"
                    >
                        About Us
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/welcome?section=documentation");
                            setIsMenuOpen(false);
                        }}
                        type="link"
                        className="block w-full text-left text-black text-lg"
                    >
                        Documentation
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/login");
                            setIsMenuOpen(false);
                        }}
                        type="link"
                        className="block w-full text-left text-black text-lg"
                    >
                        Login
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/register");
                            setIsMenuOpen(false);
                        }}
                        type="link"
                        className="block w-full text-left text-black text-lg"
                    >
                        Register
                    </Button>
                </div>
            )}

            {page === 0 && <HomeScreen />}
            {page === 1 && <AboutUs />}
            {page === 2 && <Documentation />}
        </main>
    );
}
