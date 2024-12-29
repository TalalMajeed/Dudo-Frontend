import "./styles.scss";
import { Button, Select, Radio, Input } from "antd";
import { TeamOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
const { TextArea } = Input;
import { API } from "../../utils/constants";

function TeamInfo(props) {
    const navigate = useNavigate();
    return (
        <form className="bg-white p-10 rounded-lg shadow-lg w-[480px] max-w-[480px]">
            <h1 className="text-4xl font-bold">Team Info.</h1>
            <p className="text-base mt-5 mb-5">
                <span>Already a Member?</span>
                <Button
                    type="link"
                    className="text-base p-1"
                    onClick={() => navigate("/login")}
                >
                    Login
                </Button>
            </p>
            <Input
                size="large"
                prefix={<TeamOutlined className="mr-2 text-[#999999]" />}
                className="w-[100%] h-[50px] text-base mb-5"
                placeholder="Enter Team Name"
                onChange={(e) => props.setTeamName(e.target.value)}
            />
            <p className="text-base mb-5">Select Team Size</p>
            <Radio.Group
                className="h-[50px] w-[100%] mb-5"
                value={props.size}
                onChange={(e) => props.setSize(e.target.value)}
            >
                <Radio.Button
                    className="text-center text-base leading-[45px] h-[50px] w-[33.3%]"
                    value="0"
                >
                    2 to 5
                </Radio.Button>
                <Radio.Button
                    className="text-center text-base leading-[45px] h-[50px] w-[33.3%]"
                    value="1"
                >
                    5 to 20
                </Radio.Button>
                <Radio.Button
                    className="text-center text-base leading-[45px] h-[50px] w-[33.3%]"
                    value="2"
                >
                    20 to 50
                </Radio.Button>
            </Radio.Group>
            <p className="text-base mb-5">Select Industry</p>
            <Select
                className="w-[100%] h-[50px] text-base mb-5"
                placeholder="Select Industry"
                prefix={
                    <SettingOutlined className="mr-2 mt-[6px] text-[#999999]" />
                }
                onChange={(value) => props.setTeamIndustry(value)}
            >
                <Select.Option value="technology">Technology</Select.Option>
                <Select.Option value="finance">Finance</Select.Option>
                <Select.Option value="human resources">
                    Human Resources
                </Select.Option>
                <Select.Option value="marketing">Marketing</Select.Option>
                <Select.Option value="management">Management</Select.Option>
            </Select>
            <hr />
            <Button
                type="primary"
                className="w-[100%] h-[45px] text-base mt-8 mb-5"
                onClick={() => props.setPage(1)}
            >
                Continue
            </Button>
        </form>
    );
}

function CreateAccount(props) {
    const [name1, setName1] = React.useState("");
    const [name2, setName2] = React.useState("");

    useEffect(() => {
        props.setName(`${name1} ${name2}`);
    }, [name1, name2]);

    return (
        <form className="bg-white p-10 rounded-lg shadow-lg max-w-[480px]">
            <h1 className="text-4xl font-bold">Create new account.</h1>
            <p className="text-base mt-5 mb-5">
                <span>Already a Member?</span>
                <Button
                    type="link"
                    className="text-base p-1"
                    onClick={() => navigate("/login")}
                >
                    Login
                </Button>
            </p>
            <div className="flex flex-row justify-center gap-[10px]">
                <Input
                    size="large"
                    prefix={<UserOutlined className="mr-2 text-[#999999]" />}
                    className="w-[100%] h-[50px] text-base mt-2 mb-5"
                    placeholder="First Name"
                    onChange={(e) => setName1(e.target.value)}
                />
                <Input
                    size="large"
                    prefix={<UserOutlined className="mr-2 text-[#999999]" />}
                    className="w-[100%] h-[50px] text-base mt-2 mb-5"
                    placeholder="Last Name"
                    onChange={(e) => setName2(e.target.value)}
                />
            </div>
            <Input
                size="large"
                prefix={<MailOutlined className="mr-2 text-[#999999]" />}
                className="w-[100%] h-[50px] text-base mb-5"
                placeholder="Email"
                onChange={(e) => props.setEmail(e.target.value)}
            />
            <Input
                size="large"
                prefix={<LockOutlined className="mr-2 text-[#999999]" />}
                className="w-[100%] h-[50px] text-base mb-8"
                placeholder="Password"
                onChange={(e) => props.setPassword(e.target.value)}
            />
            <hr />
            <Button
                onClick={props.submitRegistration}
                loading={props.loading}
                type="primary"
                className="w-[100%] h-[45px] text-base mt-8 mb-5"
            >
                Create Team
            </Button>
            <Button
                className="w-[100%] h-[45px] text-base mb-5"
                onClick={() => props.setPage(0)}
            >
                Go Back
            </Button>
            <Alert
                style={{ display: props.error ? "block" : "none" }}
                message={props.error}
                type="error"
                className="text-base text-red-500 text-center w-[100%] h-[45px] mb-5"
            />
        </form>
    );
}

function OTPVerification(props) {
    return (
        <form className="bg-white p-10 rounded-lg shadow-lg max-w-[480px] flex flex-col items-center">
            <h1 className="text-4xl font-bold">Verify your account.</h1>
            <p className="text-base mt-10 mb-10 text-center">
                Hey User, Thank you for choosing Dudo. Use the following OTP to
                complete your registration!
            </p>
            <Input.OTP
                size="large"
                className="w-[100%] h-[0px] text-base"
                id="otp"
                placeholder="Enter OTP"
            />
            <hr />
            <Button
                type="primary"
                className="w-[100%] h-[45px] text-base mt-8 mb-5"
            >
                Verify Account
            </Button>
            <Button className="w-[100%] h-[45px] text-base mb-5">
                Resend OTP
            </Button>
            <Alert
                message="Incorrect OTP"
                type="error"
                className="text-base text-red-500 text-center w-[100%] h-[45px] mb-5"
            />
        </form>
    );
}

function UpdateProfile(props) {
    const [fileList, setFileList] = React.useState([]);
    const [uploadedImage, setUploadedImage] = React.useState(null);

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleChange = async ({ fileList: newFileList }) => {
        const latestFile = newFileList.slice(-1)[0];
        setFileList(newFileList.slice(-1));

        if (latestFile) {
            const base64Image = await getBase64(latestFile.originFileObj);
            setUploadedImage(base64Image);
            setPreviewImage(base64Image);
        } else {
            setUploadedImage(null);
            setPreviewImage("");
        }
    };

    const handleRemove = () => {
        setFileList([]);
        setUploadedImage(null);
        setPreviewImage("");
    };

    const uploadButton = (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <form className="bg-white p-10 rounded-lg shadow-lg max-w-[480px] flex flex-col items-center">
            <h1 className="text-4xl font-bold">Complete Team Info</h1>
            <p className="text-base mt-5 mb-4 text-center">
                Upload an image and provide a brief description to complete your
                team setup.
            </p>
            <div className="mb-2 w-[120px] h-[120px] flex justify-center items-center rounded-full">
                <Upload
                    listType="picture-circle"
                    fileList={fileList}
                    onChange={handleChange}
                    onRemove={handleRemove}
                    showUploadList={{ showPreviewIcon: false }}
                    beforeUpload={() => false}
                >
                    {fileList.length === 0 && uploadButton}
                </Upload>
            </div>

            <TextArea
                id="text-area"
                rows={4}
                className="w-[100%] h-[20px] text-base mt-2 mb-5"
                placeholder="Write a Short Description about your Team"
            />
            <Button
                type="primary"
                className="w-[100%] h-[45px] text-base mt-2 mb-5"
                onClick={() =>
                    console.log("Uploaded Image Base64:", uploadedImage)
                }
            >
                Save & Continue
            </Button>
            <Button
                className="w-[100%] h-[45px] text-base mb-5"
                onClick={() =>
                    console.log("Uploaded Image Base64:", uploadedImage)
                }
            >
                Will Setup Later!
            </Button>
        </form>
    );
}
export default function Index() {
    const [teamName, setTeamName] = React.useState("");
    const [teamSize, setTeamSize] = React.useState("1");
    const [teamIndustry, setTeamIndustry] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const submitRegistration = async () => {
        setLoading(true);
        setError("");
        try {
            console.log("Submitting Registration");
            //If any of the information is missing, show an error
            if (
                teamName === "" ||
                teamSize === "" ||
                teamIndustry === "" ||
                name === "" ||
                email === "" ||
                password === ""
            ) {
                setError("Please fill in all the fields.");
                return;
            }

            console.log(
                JSON.stringify({
                    teamName,
                    teamSize:
                        teamSize == 0
                            ? "2-5"
                            : teamSize == 1
                            ? "5-20"
                            : "20-50",
                    teamIndustry,
                    name,
                    email,
                    password,
                })
            );

            const response = await fetch(API + "/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    teamName,
                    teamSize:
                        teamSize == 0
                            ? "2-5"
                            : teamSize == 1
                            ? "5-20"
                            : "20-50",
                    teamIndustry,
                    name,
                    email,
                    password,
                }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const [page, setPage] = React.useState(0);
    return (
        <main
            id="register"
            className="w-[100svw] h-[100svh] flex flex-col items-center justify-center"
        >
            {page === 0 && (
                <TeamInfo
                    size={teamSize}
                    setSize={setTeamSize}
                    setPage={setPage}
                    setTeamName={setTeamName}
                    setTeamIndustry={setTeamIndustry}
                />
            )}
            {page === 1 && (
                <CreateAccount
                    setPage={setPage}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setName={setName}
                    submitRegistration={submitRegistration}
                    loading={loading}
                    error={error}
                />
            )}
            {page === 2 && <OTPVerification setPage={setPage} />}
            {page === 3 && <UpdateProfile setPage={setPage} />}
        </main>
    );
}
