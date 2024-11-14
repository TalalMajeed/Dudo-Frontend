import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import background from '../../assets/background-wallpaper.jpg';
import { TextareaAutosize, Avatar } from "@mui/material";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import "./styles.scss";

function Customization() {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };
    const handleNextClick =(e)=>{
        e.preventDefault();
        navigate('/dashboard');
    }
   const handlePreviousClick =(e)=>{
    e.preventDefault();
    const previousPage = 3;
    navigate(`/register?page=${previousPage}`);
   }

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#202124]"
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="bg-white p-12 rounded-xl shadow-lg max-w-md w-full">
                <div className="flex justify-center mb-6">
                    <Avatar
                        src={image || ""}
                        alt="Profile"
                        sx={{ width: 100, height: 100, bgcolor: "#7E5A9B" }}
                    />
                </div>

                <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
                    Upload Your Profile
                </h1>

                <p className="text-gray-600 text-center mb-8">
                    Upload an image and provide a brief description to complete your
                    profile setup.
                </p>

                <div className="flex items-center justify-center mb-4">
                    <label
                        className="flex flex-col items-center justify-center w-full border-2 border-dashed rounded-lg cursor-pointer transition hover:bg-gray-100"
                        style={{
                            height: "84px",
                            padding: "12px"
                        
                        }}
                    >
                        <FiUpload className="text-[#A286DD] text-2xl mb-2 transition-transform transform hover:scale-110" />
                        <span className="text-gray-600 text-sm font-medium hover:text-[#A286DD]">
                            Click to Upload Image
                        </span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </label>
                </div>

                <TextareaAutosize
                    minRows={3}
                    placeholder="Write a short description about yourself..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px",
                        fontSize: "1rem",
                        borderRadius: "0.375rem",
                        backgroundColor: "#f3f4f6",
                        border: "none",
                        outline: "none",
                        marginBottom: "16px",
                        resize: "none",
                    }}
                />

                <div className="flex space-x-4">
                    <button
                        type="button"
                        className="flex items-center justify-center flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-lg shadow-md hover:from-red-600 hover:to-pink-600 transition-transform transform hover:scale-104"
                        onClick={handlePreviousClick}
                    >
                        <FaArrowLeft className="mr-2 text-lg" />
                        Previous
                    </button>

                    <button
                        type="submit"
                        className="flex items-center justify-center flex-1 bg-[#A286DD] text-white py-3 rounded-lg shadow-md hover:bg-[#7E5A9B] transition-transform transform hover:scale-104"
                        onClick={handleNextClick}
                    >
                        Next
                        <FaArrowRight className="ml-2 text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Customization;
