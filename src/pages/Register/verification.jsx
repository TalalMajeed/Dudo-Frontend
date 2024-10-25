import "./styles.scss";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { Button } from "@mui/material";

export default function Verification() {
    const [otp, setOtp] = useState("");

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#202124]">
            <div className="bg-white p-12 rounded-xl shadow-lg max-w-md w-full">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    Verify OTP<span className="text-blue-500">.</span>
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Hey User, <br />
                    Thank you for choosing Dudo. <br />
                    Use the following OTP to complete your registration!
                </p>
                <div className="flex justify-center mb-8">
                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={5}
                        renderSeparator={() => <span className="px-2">-</span>}
                        renderInput={(props) => <input {...props} />}
                        inputStyle={{
                            width: "3rem",
                            height: "3rem",
                            margin: "0.1rem",
                            fontSize: "1.5rem",
                            borderRadius: "0.375rem",
                            border: "1px solid #1E3A8A",
                            textAlign: "center",
                        }}
                        focusStyle={{
                            border: "2px solid #1E40AF",
                            outline: "none",
                        }}
                    />
                </div>

                <Button
                    variant="contained"
                    sx={{
                        width: "100%",
                        height: "50px",
                        background: "linear-gradient(to right, #ef4444, #ec4899)",
                        color: "#FFFFFF",
                        fontSize: "1.2rem",
                        borderRadius: "0.5rem",
                        "&:hover": {
                            background: "linear-gradient(to right, #dc2626, #db2777)",
                        },
                    }}
                >
                    Verify OTP
                </Button>
            </div>
        </div>
    );
}
