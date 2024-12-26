import "./styles.scss";
import { Button, Input, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Index() {
    const navigate = useNavigate();
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
                    placeholder="Email"
                />
                <Input
                    size="large"
                    prefix={<LockOutlined className="mr-2 text-[#999999]" />}
                    className="w-[100%] h-[50px] text-base mb-8"
                    placeholder="Password"
                />
                <hr />
                <Button
                    type="primary"
                    className="w-[100%] h-[45px] text-base mt-8 mb-5"
                >
                    Log into Account
                </Button>
                <Alert
                    message="Incorrect Username or Password"
                    type="error"
                    className="text-base text-red-500 text-center w-[100%] h-[45px] mb-5"
                />
            </form>
        </main>
    );
}
