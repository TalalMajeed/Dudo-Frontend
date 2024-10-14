import "./styles.scss";
import { useState } from 'react';
import OTPInput from 'react-otp-input';
import { Button } from "@mui/material";
export default function Verification() {
  const [otp, setOtp] = useState('');

  return (
    <div className="h-screen bg-gradient-to-b from-[#B6A9E0] via-[#A286DD] to-[#4E2F7F] flex items-center justify-center">
      <div className="bg-white p-10 rounded-md shadow-md w-[550px] h-[550px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-700 pt-4">Your OTP</h1>
        </div>

        <div className="text-center text-gray-600  mt-0 pt-0 ">
          <p>Hey David,</p>
          <p className="mt-4">
            Thank you for choosing Dudo. Use the following OTP to complete the 
            procedure to change your email address. OTP is valid for <b>5 minutes</b>. 
            Do not share this code with others, including your Dudo collaborators.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            renderSeparator={() => <span className="px-1">-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              width: '2.5rem',
              height: '2.5rem',
              margin: '0.5rem',
              fontSize: '1.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #4E2F7F',
              textAlign: 'center',
            }}
            focusStyle={{
              border: '1px solid #4E2F7F',
              outline: 'none',
            }}
          />
        </div>
    <div className="flex items-center justify-center">
    <Button
      variant="contained"
      style={{
        width: 250, 
        color: '#FFFFFF', 
        height: 45,
        backgroundColor: '#4E2F7F', 
      }}
    >
      Verify OTP
    </Button>  
    </div>
     
      </div>
    </div>
  );
}
