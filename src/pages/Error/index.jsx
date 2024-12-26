import "./styles.scss";
import { Button, Input, List } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Index(props) {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(0);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <main id="index">
            <section className="flex items-center justify-between p-4 border-b border-gray-300">
                <h1 className="text-2xl md:w-[200px] font-bold">DUDO</h1>
                <div className="hidden md:flex gap-6">
                    <Button
                        onClick={() => {
                            navigate("/welcome?section=home");
                        }}
                        type="link"
                        className="text-black text-lg"
                    >
                        Home Screen
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/welcome?section=about");
                        }}
                        type="link"
                        className="text-black text-lg"
                    >
                        About Us
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/welcome?section=documentation");
                        }}
                        type="link"
                        className="text-black text-lg"
                    >
                        Documentation
                    </Button>
                </div>
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-black focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={
                                    isMenuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16m-7 6h7"
                                }
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex gap-4  md:w-[200px]">
                    <Button
                        variant="outlined"
                        className="text-base w-24 h-10"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Button>
                    <Button
                        type="primary"
                        variant="contained"
                        className="text-base w-24 h-10"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </Button>
                </div>
            </section>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-100 p-4 space-y-2">
                    <Button
                        onClick={() => {
                            navigate("/welcome?section=home");
                            setIsMenuOpen(false);
                        }}
                        type="link"
                        className="block w-full text-left text-black text-lg"
                    >
                        Home Screen
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/welcome?section=about");
                            setIsMenuOpen(false);
                        }}
                        type="link"
                        className="block w-full text-left text-black text-lg"
                    >
                        About Us
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/welcome?section=documentation");
                            setIsMenuOpen(false);
                        }}
                        type="link"
                        className="block w-full text-left text-black text-lg"
                    >
                        Documentation
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/login");
                            setIsMenuOpen(false);
                        }}
                        type="link"
                        className="block w-full text-left text-black text-lg"
                    >
                        Login
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/register");
                            setIsMenuOpen(false);
                        }}
                        type="link"
                        className="block w-full text-left text-black text-lg"
                    >
                        Register
                    </Button>
                </div>
            )}
            <section className="flex m-20 flex-col justify-center items-center">
                <h4 className="text-4xl font-semibold">Something Went Wrong</h4>
                <p className="mt-10">
                    Error {props.error} : {props.description}
                </p>
                <Button
                    onClick={() => {
                        navigate("/welcome?section=home");
                    }}
                    className="mt-10 w-[250px] h-[40px]"
                >
                    Back to Home
                </Button>
            </section>
        </main>
    );
}
