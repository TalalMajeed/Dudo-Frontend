import "./styles.scss";
import { Alert } from "antd";
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
<<<<<<< HEAD
=======
    SendOutlined,
>>>>>>> d49be18601e87a7798e2adfa8af5cb4f58f97aaa
} from "@ant-design/icons";
import { useUser } from "../../App";
import { API } from "../../utils/constants";
import { Navigate } from "react-router-dom";
<<<<<<< HEAD
import { Card, Dropdown } from "antd";

export default function Index() {
    const onClick = (e) => {
        setPage(e.key);
    };
=======
import { Dropdown } from "antd";
import { Table } from "antd";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
    Card,
    Col,
    Row,
    Button,
    Modal,
    Form,
    Input,
    Select,
    DatePicker,
    Popconfirm,
    Tooltip,
    Avatar,
    Divider,
} from "antd";
import { DeleteOutlined, CommentOutlined } from "@ant-design/icons";
import "./styles.scss";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Layout } from "antd";

import { Typography } from "antd";

const { Title, Text } = Typography;
const { TextArea } = Input;
const localizer = momentLocalizer(moment);
import { List } from "antd";

const ItemType = {
    TASK: "TASK",
};

const { Sider, Content } = Layout;

export default function Index() {
    const [selectedContact, setSelectedContact] = useState("Talal"); // Default selected contact
    const [newMessage, setNewMessage] = useState("");
    const [chats, setChats] = useState({
        Noor: [
            { text: "Hello!", isMine: false, time: "10:00 AM" },
            { text: "How are you?", isMine: false, time: "10:02 AM" },
        ],
        Talal: [
            { text: "Hi Talal!", isMine: true, time: "10:05 AM" },
            { text: "What's up?", isMine: false, time: "10:07 AM" },
        ],
    });

    const sendMessage = () => {
        if (newMessage.trim()) {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            });
            setMessages([
                ...messages,
                {
                    sender: "You",
                    text: newMessage,
                    isMine: true,
                    time: formattedTime,
                },
            ]);
            setNewMessage("");
        }
    };

    const initialData = [
        {
            title: "Complete Documentation",
            description: "Finish the project documentation.",
            status: "In Progress",
            assignedTo: "user1",
            assignTime: "2024-12-28 09:00",
            endTime: "2024-12-29 17:00",
            comments: [],
        },
        {
            title: "Code Review",
            description: "Review the pull request for bug fixes.",
            status: "Todo",
            assignedTo: "user2",
            assignTime: "2024-12-27 09:00",
            endTime: "2024-12-28 12:00",
            comments: [],
        },
        {
            title: "Deployment",
            description: "Deploy the latest build to production.",
            status: "Done",
            assignedTo: "user3",
            assignTime: "2024-12-25 10:00",
            endTime: "2024-12-26 15:00",
            comments: [],
        },
    ];

    const onClick = (e) => {
        setPage(e.key);
    };
>>>>>>> d49be18601e87a7798e2adfa8af5cb4f58f97aaa
    const { user, setUser } = useUser();
    const [team, setTeam] = React.useState({
        teamImage: "",
        teamSize: "",
        teamIndustry: "",
        teamName: "",
        teamDescription: "",
    });
<<<<<<< HEAD
    const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState([]);

    const [page, setPage] = useState(3);
=======

    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [form] = Form.useForm();

    const addNewTaskAPI = async (task) => {
        console.log(
            JSON.stringify({
                teamID: user.teamID,
                title: task.title,
                description: task.description,
                status: task.status,
                assignedTo: task.assignedTo,
                assignTime: parseInt(
                    new Date(task.assignTime).getTime() / 1000
                ),
                endTime: parseInt(new Date(task.endTime).getTime() / 1000),
                comments: task.comments,
            })
        );
        try {
            const response = await fetch(API + "/api/task/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    teamID: user.teamID,
                    title: task.title,
                    description: task.description,
                    status: task.status,
                    assignedTo: task.assignedTo,
                    assignTime: parseInt(
                        new Date(task.assignTime).getTime() / 1000
                    ),
                    endTime: parseInt(new Date(task.endTime).getTime() / 1000),
                    comments: task.comments,
                }),
            });

            if (!response.ok || response.status !== 200) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to add task");
            }
            console.log("Task added successfully");
            getTasks();
        } catch (err) {
            console.error(err);
        }
    };

    const updateTaskAPI = async (task, index) => {
        console.log(task);
        console.log(index);
        try {
            const response = await fetch(
                API + "/api/task/update/" + user.teamID + "/" + index,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user.token}`,
                    },
                    body: JSON.stringify({
                        teamID: user.teamID,
                        title: task.title,
                        description: task.description,
                        status: task.status,
                        assignedTo: new Date(task.assignedTo).getTime() / 1000,
                        assignTime: new Date(task.assignTime).getTime() / 1000,
                        endTime: task.endTime,
                        comments: task.comments,
                    }),
                }
            );

            if (!response.ok || response.status !== 200) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to update task");
            }

            console.log("Task updated successfully");
            getTasks();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteTaskAPI = async (index) => {
        try {
            const response = await fetch(
                API + "/api/task/delete/" + user.teamID + "/" + index,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            );

            if (!response.ok || response.status !== 200) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to delete task");
            }

            console.log("Task deleted successfully");
            getTasks();
        } catch (err) {
            console.error(err);
        }
    };

    const handleAddMeeting = (values) => {
        const newEvent = {
            title: values.title,
            start: new Date(values.startTime),
            end: new Date(values.endTime),
            allDay: false,
        };
        setEvents((prevEvents) => [...prevEvents, newEvent]);
        setIsModalVisible(false);
        form.resetFields();
    };

    const handleDeleteMeeting = (eventToDelete) => {
        setEvents((prevEvents) =>
            prevEvents.filter((event) => event !== eventToDelete)
        );
        setSelectedEvent(null);
    };

    const [users, setUsers] = useState([]);
    //users --> name
    const [tasks, setTasks] = useState(initialData);
    const [newUserEmail, setNewUserEmail] = useState("");
    const [newUserName, setNewUserName] = useState("");
    const [newUserPassword, setNewUserPassword] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [page, setPage] = useState(1);
>>>>>>> d49be18601e87a7798e2adfa8af5cb4f58f97aaa

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

<<<<<<< HEAD
=======
    const addNewUser = async (email, name, password) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                console.log("User already exists");
                return;
            }
        }
        try {
            console.log(
                JSON.stringify({ email, name, password, teamID: user.teamID })
            );
            const response = await fetch(API + "/api/user/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    password: password,
                    teamID: user.teamID,
                }),
            });

            if (!response.ok || response.status !== 200) {
                const errorData = await response.text();
                throw new Error(errorData.error || "Failed to add user");
            }
            console.log("User added successfully");
            setIsModalOpen(false);
            getUsers();
        } catch (err) {
            console.error(err);
        }
    };

>>>>>>> d49be18601e87a7798e2adfa8af5cb4f58f97aaa
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
<<<<<<< HEAD
=======

            data.forEach((task) => {
                task.assignTime = new Date(task.assignTime);
                task.endTime = new Date(task.endTime);
                task.comments = JSON.parse(task.comments);
            });
            console.log(data);

            if (JSON.stringify(data) === JSON.stringify(tasks)) {
                return;
            }
>>>>>>> d49be18601e87a7798e2adfa8af5cb4f58f97aaa
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

<<<<<<< HEAD
    return (
        <main id="panel" className="flex flex-row justify-between">
=======
    const [isModalVisible, setIsModalVisible] = useState(false);

    const moveTask = (task, newStatus) => {
        setTasks((prevTasks) =>
            prevTasks.map((t) =>
                t.title === task.title ? { ...t, status: newStatus } : t
            )
        );

        let index = -1;

        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].title === task.title) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            console.log("Task not found");
            return;
        }

        task.status = newStatus;

        updateTaskAPI(task, index);
    };

    const deleteTask = (title) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.title !== title)
        );

        let index = -1;

        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].title === title) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            console.log("Task not found");
            return;
        }

        deleteTaskAPI(index);
    };

    const addComment = (title, comment) => {
        setTasks((prevTasks) =>
            prevTasks.map((t) =>
                t.title === title
                    ? { ...t, comments: [...t.comments, comment] }
                    : t
            )
        );

        let index = -1;

        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].title === title) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            console.log("Task not found");
            return;
        }

        updateTaskAPI(tasks[index], index);
    };

    const handleCreateTask = (values) => {
        const newTask = {
            ...values,
            assignTime: values.assignTime.format("YYYY-MM-DD HH:mm"),
            endTime: values.endTime.format("YYYY-MM-DD HH:mm"),
            comments: [],
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setIsModalVisible(false);
        form.resetFields();

        addNewTaskAPI(newTask);
    };

    const columns = ["Todo", "In Progress", "Done"];

    return (
        <main
            id="panel"
            className="flex flex-row justify-between overflow-hidden"
        >
>>>>>>> d49be18601e87a7798e2adfa8af5cb4f58f97aaa
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
<<<<<<< HEAD
                        
                        <Button
=======
                        >
                            <Button
>>>>>>> d49be18601e87a7798e2adfa8af5cb4f58f97aaa
                                className="w-[50px] h-[50px]"
                                shape="circle"
                            >
                                <UserOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                </div>
<<<<<<< HEAD
                <div className="p-[15px] w-[100%] overflow-y-auto">
                    {page == 1 ? <div>Dashboard</div> : null}
                    {page == 2 ? <div>Calendar</div> : null}
=======
                <div className="p-[15px] w-[100%] overflow-y-auto max-h-[100svh]">
                    {page == 1 ? (
                        <div>
                            <div className="text-2xl font-semi-bold mb-5">
                                Dashboard
                            </div>
                            <div className="flex flex-row gap-[20px]">
                                <Card title="Your Profile" className="flex-1">
                                    <p className="text-2xl">{user.name}</p>
                                    <p className="text-1xl mt-2">
                                        {user.userID}
                                    </p>
                                    <p className="text-1xl">{user.userEmail}</p>
                                    <p className="text-1xl">
                                        Team ID: {user.teamID}
                                    </p>
                                </Card>
                                <Card className="flex-1" title="Team Details">
                                    <div className="flex flex-row justify-between">
                                        <div>
                                            <p className="text-2xl">
                                                {team.teamName}
                                            </p>
                                            <p className="text-1xl mt-2">
                                                {team.teamDescription}
                                            </p>
                                            <p className="text-1xl">
                                                Industry: {team.teamIndustry}
                                            </p>
                                            <p className="text-1xl">
                                                Team Size: {team.teamSize}
                                            </p>
                                        </div>
                                        <div>
                                            <img
                                                src={team.teamImage}
                                                width={100}
                                                height={100}
                                                style={{
                                                    objectFit: "cover",
                                                    borderRadius: "50%",
                                                }}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ) : null}
                    {page == 2 ? (
                        <>
                            <div className="text-2xl font-semi-bold mb-5">
                                User Calendar
                            </div>
                            <div
                                style={{
                                    padding: "20px",
                                    backgroundColor: "#f9f9f9",
                                    minHeight: "100vh",
                                }}
                            >
                                <Card
                                    style={{
                                        borderRadius: "10px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: "20px",
                                        }}
                                    >
                                        <Button
                                            type="primary"
                                            onClick={() =>
                                                setIsModalVisible(true)
                                            }
                                            style={{
                                                borderRadius: "5px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Add Meeting
                                        </Button>
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "10px",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Button
                                                onClick={() =>
                                                    document
                                                        .querySelector(
                                                            ".rbc-toolbar .rbc-btn-group button:first-child"
                                                        )
                                                        .click()
                                                }
                                                style={{ borderRadius: "5px" }}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                onClick={() =>
                                                    document
                                                        .querySelector(
                                                            ".rbc-toolbar button:nth-child(2)"
                                                        )
                                                        .click()
                                                }
                                                style={{ borderRadius: "5px" }}
                                            >
                                                Today
                                            </Button>
                                            <Button
                                                onClick={() =>
                                                    document
                                                        .querySelector(
                                                            ".rbc-toolbar .rbc-btn-group button:last-child"
                                                        )
                                                        .click()
                                                }
                                                style={{ borderRadius: "5px" }}
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    </div>
                                    <BigCalendar
                                        localizer={localizer}
                                        events={events}
                                        startAccessor="start"
                                        endAccessor="end"
                                        style={{
                                            height: 500,
                                            backgroundColor: "#ffffff",
                                            borderRadius: "8px",
                                            boxShadow:
                                                "0 4px 8px rgba(0, 0, 0, 0.1)",
                                        }}
                                        selectable
                                        onSelectEvent={(event) =>
                                            setSelectedEvent(event)
                                        }
                                        eventPropGetter={(event) => ({
                                            style: {
                                                backgroundColor: "#4caf50",
                                                color: "#fff",
                                                borderRadius: "5px",
                                                padding: "5px",
                                                cursor: "pointer",
                                            },
                                        })}
                                    />
                                </Card>

                                <Modal
                                    title={
                                        <Title
                                            level={3}
                                            style={{ textAlign: "center" }}
                                        >
                                            Add Meeting
                                        </Title>
                                    }
                                    visible={isModalVisible}
                                    onCancel={() => setIsModalVisible(false)}
                                    footer={null}
                                >
                                    <div
                                        style={{
                                            maxWidth: "400px",
                                            margin: "0 auto",
                                        }}
                                    >
                                        <Form
                                            form={form}
                                            onFinish={handleAddMeeting}
                                            layout="vertical"
                                        >
                                            <Form.Item
                                                label="Meeting Title"
                                                name="title"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Please enter a title",
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Enter meeting title" />
                                            </Form.Item>
                                            <Row gutter={16}>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Start Time"
                                                        name="startTime"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please select a start time",
                                                            },
                                                        ]}
                                                    >
                                                        <DatePicker
                                                            showTime
                                                            style={{
                                                                width: "100%",
                                                            }}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="End Time"
                                                        name="endTime"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please select an end time",
                                                            },
                                                        ]}
                                                    >
                                                        <DatePicker
                                                            showTime
                                                            style={{
                                                                width: "100%",
                                                            }}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Form.Item>
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    block
                                                    style={{
                                                        fontWeight: "bold",
                                                        borderRadius: "5px",
                                                    }}
                                                >
                                                    Add Meeting
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </Modal>

                                {/* Delete Meeting Confirmation */}
                                {selectedEvent && (
                                    <Modal
                                        title={
                                            <Title level={3}>
                                                Delete Meeting
                                            </Title>
                                        }
                                        visible={!!selectedEvent}
                                        onCancel={() => setSelectedEvent(null)}
                                        footer={[
                                            <Popconfirm
                                                title="Are you sure you want to delete this meeting?"
                                                onConfirm={() =>
                                                    handleDeleteMeeting(
                                                        selectedEvent
                                                    )
                                                }
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <Button type="primary" danger>
                                                    Delete
                                                </Button>
                                            </Popconfirm>,
                                            <Button
                                                onClick={() =>
                                                    setSelectedEvent(null)
                                                }
                                            >
                                                Cancel
                                            </Button>,
                                        ]}
                                    >
                                        <Text>
                                            Meeting: {selectedEvent.title}
                                        </Text>
                                        <p>
                                            Start Time:{" "}
                                            {moment(selectedEvent.start).format(
                                                "YYYY-MM-DD HH:mm"
                                            )}
                                        </p>
                                        <p>
                                            End Time:{" "}
                                            {moment(selectedEvent.end).format(
                                                "YYYY-MM-DD HH:mm"
                                            )}
                                        </p>
                                    </Modal>
                                )}
                            </div>
                        </>
                    ) : null}
>>>>>>> d49be18601e87a7798e2adfa8af5cb4f58f97aaa
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
<<<<<<< HEAD
                                <Button className="h-[40px]">Add Member</Button>
                            </div>
                        </div>
                    ) : null}
                    {page == 4 ? <div>Team Board</div> : null}
=======
                                <Button
                                    className="h-[40px]"
                                    onClick={showModal}
                                >
                                    Add Member
                                </Button>
                            </div>
                            <div className="mt-5">
                                <Table
                                    dataSource={users}
                                    columns={[
                                        {
                                            title: "Email",
                                            dataIndex: "email",
                                            key: "email",
                                        },
                                        {
                                            title: "Full Name",
                                            dataIndex: "name",
                                            key: "name",
                                        },
                                        {
                                            title: "Member Tag",
                                            dataIndex: "userID",
                                            key: "userID",
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    ) : null}
                    {page == 4 ? (
                        <>
                            <div className="text-2xl font-semi-bold mb-5">
                                Team Board
                            </div>
                            <DndProvider backend={HTML5Backend}>
                                <div className="kanban-board">
                                    <Row gutter={16}>
                                        {columns.map((status) => (
                                            <DroppableColumn
                                                key={status}
                                                status={status}
                                                tasks={tasks.filter(
                                                    (task) =>
                                                        task.status === status
                                                )}
                                                moveTask={moveTask}
                                                deleteTask={deleteTask}
                                                addComment={addComment}
                                                showCreateModal={() =>
                                                    setIsModalVisible(true)
                                                }
                                            />
                                        ))}
                                    </Row>

                                    <Modal
                                        title={
                                            <h2
                                                style={{
                                                    textAlign: "center",
                                                    fontSize: "24px",
                                                    fontWeight: "600",
                                                    margin: "0",
                                                }}
                                            >
                                                Create New Task
                                            </h2>
                                        }
                                        visible={isModalVisible}
                                        onCancel={() =>
                                            setIsModalVisible(false)
                                        }
                                        footer={null}
                                    >
                                        <Form
                                            form={form}
                                            onFinish={handleCreateTask}
                                            layout="vertical"
                                            requiredMark="optional"
                                        >
                                            <Form.Item
                                                label="Title"
                                                name="title"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Please enter a title",
                                                    },
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                label="Description"
                                                name="description"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Please enter a description",
                                                    },
                                                ]}
                                            >
                                                <Input.TextArea />
                                            </Form.Item>

                                            <Form.Item
                                                label="Status"
                                                name="status"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Please select a status",
                                                    },
                                                ]}
                                            >
                                                <Select>
                                                    {columns.map((status) => (
                                                        <Select.Option
                                                            key={status}
                                                            value={status}
                                                        >
                                                            {status}
                                                        </Select.Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>

                                            <Form.Item
                                                label="Assigned To"
                                                name="assignedTo"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Please enter an assignee",
                                                    },
                                                ]}
                                            >
                                                <Select placeholder="Select an option">
                                                    {users.map(
                                                        (item, index) => (
                                                            <Select.Option
                                                                key={index}
                                                                value={
                                                                    item.userID
                                                                }
                                                            >
                                                                {item.userID}
                                                            </Select.Option>
                                                        )
                                                    )}
                                                </Select>
                                            </Form.Item>

                                            <Row gutter={16}>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Assign Time"
                                                        name="assignTime"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please select a start time",
                                                            },
                                                        ]}
                                                    >
                                                        <DatePicker
                                                            showTime
                                                            style={{
                                                                width: "100%",
                                                            }}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="End Time"
                                                        name="endTime"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please select an end time",
                                                            },
                                                        ]}
                                                    >
                                                        <DatePicker
                                                            showTime
                                                            style={{
                                                                width: "100%",
                                                            }}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                            </Row>

                                            <Form.Item>
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    size="large"
                                                    block
                                                >
                                                    Create Task
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </Modal>
                                </div>
                            </DndProvider>
                        </>
                    ) : null}
>>>>>>> d49be18601e87a7798e2adfa8af5cb4f58f97aaa
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
<<<<<<< HEAD
                    {page == 6 ? <div>Team Chat</div> : null}
                </div>
            </section>
=======
                    {page == 6 ? (
                        <Layout
                            style={{ height: "100vh", background: "#f4f5fc" }}
                        >
                            {/* Sidebar */}
                            <Sider
                                theme="light"
                                width={300}
                                style={{
                                    background: "#fff",
                                    borderRight: "1px solid #e8e8e8",
                                    overflowY: "auto",
                                }}
                            >
                                <div
                                    style={{
                                        padding: "16px",
                                        background: "#a48ff4",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                        textAlign: "center",
                                    }}
                                >
                                    Contacts
                                </div>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={[
                                        {
                                            name: "Noor",
                                            status: "Always on holidays",
                                        },
                                        {
                                            name: "Talal",
                                            status: "Active 10 mins ago",
                                            active: true,
                                        },
                                    ]}
                                    renderItem={(contact) => (
                                        <List.Item
                                            onClick={() =>
                                                setSelectedContact(contact.name)
                                            }
                                            style={
                                                selectedContact === contact.name
                                                    ? {
                                                          background: "#f0f5ff",
                                                          borderLeft:
                                                              "4px solid #a48ff4",
                                                          cursor: "pointer",
                                                      }
                                                    : { cursor: "pointer" }
                                            }
                                        >
                                            <List.Item.Meta
                                                avatar={
                                                    <Avatar
                                                        style={{
                                                            backgroundColor:
                                                                "#a48ff4",
                                                        }}
                                                    >
                                                        {contact.name[0]}
                                                    </Avatar>
                                                }
                                                title={
                                                    <Typography.Text strong>
                                                        {contact.name}
                                                    </Typography.Text>
                                                }
                                                description={
                                                    <span
                                                        style={{
                                                            color: "#888",
                                                        }}
                                                    >
                                                        {contact.status}
                                                    </span>
                                                }
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Sider>

                            {/* Main Chat Area */}
                            <Content
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    background: "#f9f9fb",
                                }}
                            >
                                {/* Chat Header */}
                                <div
                                    style={{
                                        padding: "16px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        background: "#a48ff4",
                                        color: "#fff",
                                        borderBottom: "1px solid #e8e8e8",
                                        height: "63px",
                                    }}
                                >
                                    <Typography.Title
                                        level={4}
                                        style={{
                                            margin: 0,
                                            color: "#fff",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {selectedContact}
                                    </Typography.Title>
                                </div>

                                {/* Messages Section */}
                                <div
                                    style={{
                                        flex: 1,
                                        padding: "24px",
                                        overflowY: "auto",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "16px",
                                    }}
                                >
                                    {chats[selectedContact]?.map(
                                        (msg, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: msg.isMine
                                                        ? "flex-end"
                                                        : "flex-start",
                                                    gap: "4px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        background: msg.isMine
                                                            ? "#a48ff4"
                                                            : "#f0f0f0",
                                                        color: msg.isMine
                                                            ? "#fff"
                                                            : "#000",
                                                        padding: "12px 16px",
                                                        borderRadius: "18px",
                                                        maxWidth: "60%",
                                                        wordWrap: "break-word",
                                                    }}
                                                >
                                                    {msg.text}
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: "12px",
                                                        color: "#888",
                                                        textAlign: msg.isMine
                                                            ? "right"
                                                            : "left",
                                                    }}
                                                >
                                                    {msg.time}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>

                                {/* Message Input */}
                                <div
                                    style={{
                                        padding: "16px",
                                        borderTop: "1px solid #e8e8e8",
                                        background: "#fff",
                                    }}
                                >
                                    <div
                                        style={{ display: "flex", gap: "12px" }}
                                    >
                                        <TextArea
                                            placeholder="Type your message..."
                                            autoSize={{
                                                minRows: 1,
                                                maxRows: 3,
                                            }}
                                            value={newMessage}
                                            onChange={(e) =>
                                                setNewMessage(e.target.value)
                                            }
                                            style={{
                                                flex: 1,
                                                borderRadius: "8px",
                                                padding: "10px",
                                                fontSize: "16px",
                                            }}
                                        />
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            icon={<SendOutlined />}
                                            onClick={sendMessage}
                                            style={{
                                                background: "#6c5ce7",
                                                border: "none",
                                                width: "48px",
                                                height: "48px",
                                            }}
                                        />
                                    </div>
                                </div>
                            </Content>
                        </Layout>
                    ) : null}
                </div>
            </section>
            <Modal
                title="Add New Member"
                open={isModalOpen}
                onOk={() => {
                    addNewUser(newUserEmail, newUserName, newUserPassword);
                }}
                onCancel={handleCancel}
            >
                <Input
                    value={newUserEmail}
                    size="large"
                    className="mt-2 mb-2"
                    placeholder="Email"
                    onChange={(e) => setNewUserEmail(e.target.value)}
                />
                <Input
                    value={newUserName}
                    size="large"
                    className="mt-2 mb-2"
                    placeholder="Name"
                    onChange={(e) => setNewUserName(e.target.value)}
                />
                <Input
                    value={newUserPassword}
                    size="large"
                    className="mt-2 mb-2"
                    placeholder="Password"
                    onChange={(e) => setNewUserPassword(e.target.value)}
                />
            </Modal>
>>>>>>> d49be18601e87a7798e2adfa8af5cb4f58f97aaa
        </main>
    );
}

const DraggableTask = ({ task, moveTask, deleteTask, addComment }) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemType.TASK,
        item: { task },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);
    const [commentForm] = Form.useForm();
    const handleAddComment = (values) => {
        addComment(task.title, values.comment);
        setIsCommentModalVisible(false);
        commentForm.resetFields();
    };

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: "move",
                marginBottom: "10px",
            }}
        >
            <Card
                title={task.title}
                extra={
                    <>
                        <Tooltip title="Add Comment">
                            <Button
                                type="text"
                                icon={<CommentOutlined />}
                                size="small"
                                onClick={() => setIsCommentModalVisible(true)}
                            />
                        </Tooltip>
                        <Popconfirm
                            title="Are you sure you want to delete this task?"
                            onConfirm={() => deleteTask(task.title)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button
                                type="text"
                                icon={<DeleteOutlined />}
                                size="small"
                                danger
                            />
                        </Popconfirm>
                    </>
                }
                style={{ position: "relative" }}
            >
                <p>{task.description}</p>
                <div style={{ position: "absolute", bottom: 10, right: 10 }}>
                    <Tooltip
                        title={
                            <>
                                <div>Assigned to: {task.assignedTo}</div>
                                <div>Deadline: {task.endTime}</div>
                            </>
                        }
                    >
                        <Avatar
                            size="small"
                            icon={<UserOutlined />}
                            style={{
                                backgroundColor: "#a48ff4",
                                cursor: "pointer",
                                marginBottom: "15px",
                            }}
                        />
                    </Tooltip>
                </div>

                <div>
                    {task.comments.map((comment, index) => (
                        <p
                            key={index}
                            style={{ fontSize: "12px", margin: "5px 0" }}
                        >
                            <strong>Comment:</strong> {comment}
                        </p>
                    ))}
                </div>

                <Modal
                    title="Add Comment"
                    visible={isCommentModalVisible}
                    onCancel={() => setIsCommentModalVisible(false)}
                    footer={null}
                >
                    <Form
                        form={commentForm}
                        onFinish={handleAddComment}
                        layout="vertical"
                    >
                        <Form.Item
                            label="Comment"
                            name="comment"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a comment",
                                },
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Add Comment
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </Card>
        </div>
    );
};

const DroppableColumn = ({
    status,
    tasks,
    moveTask,
    deleteTask,
    addComment,
    showCreateModal,
}) => {
    const [, drop] = useDrop({
        accept: ItemType.TASK,
        drop: (item) => moveTask(item.task, status),
    });

    return (
        <Col span={8}>
            <div ref={drop} className="kanban-column">
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "8px",
                    }}
                >
                    <Button
                        type="text"
                        icon={
                            <span
                                style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                                +
                            </span>
                        }
                        onClick={showCreateModal}
                        style={{
                            marginRight: "8px",
                            cursor: "pointer",
                            color: "#4caf50",
                            fontSize: "20px",
                        }}
                    />
                    <h3 className="column-title" style={{ margin: 0 }}>
                        {status}
                    </h3>
                </div>
                <Divider />
                {tasks.map((task) => (
                    <DraggableTask
                        key={task.title}
                        task={task}
                        moveTask={moveTask}
                        deleteTask={deleteTask}
                        addComment={addComment}
                    />
                ))}
            </div>
        </Col>
    );
};
