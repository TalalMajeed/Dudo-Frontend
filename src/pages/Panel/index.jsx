import "./styles.scss";
import { Button, Input, Alert } from "antd";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import {
    PieChartOutlined,
    CalendarOutlined,
    UnorderedListOutlined,
    AppstoreOutlined,
    CustomerServiceOutlined,
    PaperClipOutlined,
    MenuOutlined,
    UserOutlined,
    BellOutlined,
    NotificationOutlined,
    LogoutOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import { useUser } from "../../App";
import { API } from "../../utils/constants";
import { Navigate } from "react-router-dom";
import { Card, Dropdown } from "antd";

export default function Index() {
    const onClick = (e) => {
        setPage(e.key);
    };
    const { user, setUser } = useUser();
    const [team, setTeam] = React.useState({
        teamImage: "",
        teamSize: "",
        teamIndustry: "",
        teamName: "",
        teamDescription: "",
    });
    const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState([]);

    const [page, setPage] = useState(3);

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    const handleSignOut = () => {
        setUser(null);
        navigate("/login");
    };

    const navigate = useNavigate();

    const getUsers = async () => {
        try {
            const response = await fetch(API + "/api/user/get/" + user.teamID, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            });

            if (!response.ok || response.status !== 200) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to get users");
            }
            console.log("Users fetched successfully");
            const data = await response.json();
            console.log(data);
            setUsers(data);
        } catch (err) {
            console.error(err);
        }
    };

    const getTasks = async () => {
        try {
            const response = await fetch(API + "/api/task/get/" + user.teamID, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            });

            if (!response.ok || response.status !== 200) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to get tasks");
            }
            console.log("Tasks fetched successfully");

            const data = await response.json();
            console.log(data);
            setTasks(data);
        } catch (err) {
            console.error(err);
        }
    };

    const getTeam = async () => {
        try {
            const response = await fetch(API + "/api/team/" + user.teamID, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            });

            if (!response.ok || response.status !== 200) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to get team");
            }
            console.log("Team fetched successfully");
            const data = await response.json();
            console.log(data);
            setTeam(data);
        } catch (err) {
            console.error(err);
        }
    };

    useState(() => {
        if (!user) {
            navigate("/login");
            return;
        }
        getTeam();
        getUsers();
        getTasks();
    }, [user]);

    const items = [
        {
            key: "1",
            label: "Dashboard",
            icon: <PieChartOutlined />,
        },
        {
            key: "2",
            label: "Calendar",
            icon: <CalendarOutlined />,
        },
        {
            key: "3",
            label: "Member List",
            icon: <UnorderedListOutlined />,
        },
        {
            key: "4",
            label: "Team Board",
            icon: <AppstoreOutlined />,
        },
        {
            key: "5",
            label: "Meetings",
            icon: <CustomerServiceOutlined />,
        },
        {
            key: "6",
            label: "Team Chat",
            icon: <PaperClipOutlined />,
        },
    ];

    const [sidebarOpen, setSidebarOpen] = React.useState(true);

    const notificationItems = [
        {
            key: "1",
            label: "Notification 1: Meeting at 3 PM",
            icon: <NotificationOutlined />,
        },
        {
            key: "2",
            label: "Notification 2: Task deadline tomorrow",
            icon: <NotificationOutlined />,
        },
        {
            key: "3",
            label: "Notification 3: New message from team",
            icon: <NotificationOutlined />,
        },
    ];

    const userMenuItems = [
        {
            key: "1",
            label: (
                <div className="text-center">
                    <strong>{user.name}</strong>
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <div className="flex gap-[10px]">
                    <LogoutOutlined />
                    Sign Out
                </div>
            ),
        },
    ];

    return (
        <main id="panel" className="flex flex-row justify-between">
            <section
                id="sidebar"
                style={{
                    width: sidebarOpen ? "300px" : "72px",
                    minWidth: sidebarOpen ? "300px" : "72px",
                    transition: "width 0.4s, min-width 0.4s",
                }}
                className="border-r-[1px] pl-[1px] h-[100svh] overflow-y-hidden"
            >
                <div className="flex flex-row ml-[5px]">
                    <Button
                        className="h-[40px] w-[40px] m-[10px]"
                        onClick={() => {
                            setSidebarOpen(!sidebarOpen);
                        }}
                    >
                        <MenuOutlined />
                    </Button>
                    <div className="m-[10px] text-[1.3rem] font-semibold leading-[40px] overflow-hidden text-nowrap">
                        Team Panel
                    </div>
                </div>
                <hr className="mt-1 mb-2" />
                <Menu
                    onClick={onClick}
                    style={{ width: "100%", height: "100%", border: "none" }}
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                    items={items}
                />
            </section>
            <section id="content" className="!w-[100%]">
                <div className="border-b-[1px] w-[100%] h-[65px] flex flex-row items-center justify-between pl-[15px] pr-[15px]">
                    <div className="">{team.teamName}</div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <Dropdown
                            overlay={<Menu items={notificationItems} />}
                            placement="bottomRight"
                            arrow
                        >
                            <Button
                                className="w-[50px] h-[50px]"
                                shape="circle"
                            >
                                <BellOutlined />
                            </Button>
                        </Dropdown>

                        <Dropdown
                            overlay={
                                <Menu
                                    items={userMenuItems}
                                    onClick={(e) => {
                                        if (e.key === "2") {
                                            handleSignOut();
                                        }
                                    }}
                                />
                            }
                            placement="bottomRight"
                            arrow
                        >
                            <Button
                                className="w-[50px] h-[50px]"
                                shape="circle"
                            >
                                <UserOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                </div>
                <div className="p-[15px] w-[100%] overflow-y-auto">
                    {page == 1 ? (
                        <div>
                            <div className="text-2xl font-semi-bold mb-5">
                                Member List
                            </div>
                            <div className="flex flex-row gap-[10px]">
                                <Input
                                    size="large"
                                    placeholder="Search for Team Members"
                                    prefix={
                                        <SearchOutlined className="text-[#a2a2a2] mr-[5px]" />
                                    }
                                />
                                <Button className="h-[40px]">Add Member</Button>
                            </div>
                        </div>
                    ) : null}
                    {page == 2 ? <div>Calendar</div> : null}
                    {page == 3 ? (
                        <div>
                            <div className="text-2xl font-semi-bold mb-5">
                                Member List
                            </div>
                            <div className="flex flex-row gap-[10px]">
                                <Input
                                    size="large"
                                    placeholder="Search for Team Members"
                                    prefix={
                                        <SearchOutlined className="text-[#a2a2a2] mr-[5px]" />
                                    }
                                />
                                <Button className="h-[40px]">Add Member</Button>
                            </div>
                        </div>
                    ) : null}
                    {page == 4 ? <div>Team Board</div> : null}
                    {page == 5 ? (
                        <div>
                            <div className="text-2xl font-semi-bold mb-5">
                                Meetings
                            </div>
                            <Input
                                size="large"
                                placeholder="Search for Scheduled Meetings"
                                prefix={
                                    <SearchOutlined className="text-[#a2a2a2] mr-[5px]" />
                                }
                            />
                        </div>
                    ) : null}
                    {page == 6 ? <div>Team Chat</div> : null}
                </div>
            </section>
        </main>
    );
}
