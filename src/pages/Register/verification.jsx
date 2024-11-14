import "./styles.scss";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import background from '../../assets/background-wallpaper.jpg';


export default function Verification() {
    const [otp, setOtp] = useState("");
    const navigate = new useNavigate();
    const handleNextClick =(e)=> {
        e.preventDefault();
        const page = 4;
        navigate(`/register?page=${page}`);
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#202124]"
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="bg-white p-12 rounded-xl shadow-lg max-w-md w-full" style={{height: '400px'}}>
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    Verify OTP<span className="text-[#7E5A9B]">.</span>
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Hey User, 
                    Thank you for choosing Dudo. <br />
                    Use the following OTP to complete your registration!
                </p>
                <div className="flex justify-center mb-8">
                <OTPInput
    value={otp}
    onChange={setOtp}
    numInputs={5}
    renderSeparator={() => <span className="px-2 text-gray-400">-</span>}
    renderInput={(props) => <input {...props} />}
    inputStyle={{
        width: "3rem",
        height: "3rem",
        margin: "0.2rem",
        fontSize: "1.6rem",
        fontWeight: "500",
        borderRadius: "0.75rem",
        border: "1.5px solid #d1d5db",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        transition: "border-color 0.3s, box-shadow 0.3s",
    }}
    focusStyle={{
        border: "2px solid #7E5A9B",
        boxShadow: "0px 4px 15px rgba(126, 90, 155, 0.3)",
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
                    onClick={handleNextClick}
                >
                    Verify OTP
                </Button>
            </div>
        </div>
    );
}
