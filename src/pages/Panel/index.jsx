import "./styles.scss";
import { Button, Input, Alert } from "antd";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import React from "react";
import {
    PieChartOutlined,
    CalendarOutlined,
    UnorderedListOutlined,
    AppstoreOutlined,
    CustomerServiceOutlined,
    PaperClipOutlined,
    MenuOutlined,
} from "@ant-design/icons";

export default function Index() {
    const onClick = (e) => {
        console.log("click ", e);
    };
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
            label: "Task List",
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
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = React.useState(true);

    return (
        <main id="panel">
            <section id="sidebar"></section>
            <section
                id="content"
                style={{
                    width: sidebarOpen ? "240px" : "73px",
                    transition: "width 0.4s",
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
        </main>
    );
}
