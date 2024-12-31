import "./styles.scss";
import { Button, Input, Alert, Spin } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { API } from "../../utils/constants";
import { useUser } from "../../App";

export default function Index() {
    const [username, setUsername] = useState("muhammad-talal-majeed-30757");
    const [password, setPassword] = useState("1234");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { user, setUser } = useUser();

    const handleLogin = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch(API + "/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok || response.status !== 200) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Login failed");
            }

            const data = await response.json();
            console.log("Login Successful:", data);
            setUser(data);
            navigate("/panel");
        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main
            id="login"
            className="w-[100svw] h-[100svh] flex flex-col items-center justify-center"
        >
            <form className="bg-white p-10 rounded-lg shadow-lg max-w-[480px]">
                <h1 className="text-4xl font-bold">
                    Log into an existing account.
                </h1>
                <p className="text-base mt-5 mb-5">
                    <span>Don't have an account?</span>
                    <Button
                        type="link"
                        className="text-base p-1"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </Button>
                </p>
                <Input
                    size="large"
                    prefix={<MailOutlined className="mr-2 text-[#999999]" />}
                    className="w-[100%] h-[50px] text-base mt-2 mb-5"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    size="large"
                    prefix={<LockOutlined className="mr-2 text-[#999999]" />}
                    className="w-[100%] h-[50px] text-base mb-8"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <hr />
                <Button
                    type="primary"
                    className="w-[100%] h-[45px] text-base mt-8 mb-5"
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? <Spin /> : "Log into Account"}
                </Button>
                {error && (
                    <Alert
                        message={error}
                        type="error"
                        className="text-base text-red-500 text-center w-[100%] h-[45px] mb-5"
                    />
                )}
            </form>
        </main>
    );
}
