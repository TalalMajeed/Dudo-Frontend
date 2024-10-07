import "./styles.scss";
import { Button, TextField, Card } from "@mui/material";
import Art from "../../assets/login-art.svg";

export default function Login() {
    return (
        <main id="login" className="w-[100svw] h-[100svh] flex justify-center items-center">
            <Card id="login-card" className="flex w-[850px] h-[550px]">
                <div className="w-[50%] !bg-[#f8f3fc]">
                    <img src={Art} alt="login" className="w-[100%] h-[550px]" />
                </div>
                <form className="flex flex-col w-[50%] h-[550px] items-center gap-6 pt-10 pb-10">
                    <h1 className="text-3xl font-bold mt-5 mb-5">DUDO LOGIN</h1>
                    <TextField className="w-[80%]" label="Email" type="text" />
                    <TextField className="w-[80%]" label="password" type="text" />
                    <div className="flex justify-end w-[80%]">
                        <Button className="!normal-case">Forgot Your Password?</Button>
                    </div>
                    <hr className="w-[80%] m-auto" />
                    <Button variant="contained" className="w-[80%] h-[50px]">Login</Button>
                    <div>Register a New Team? <Button className="!normal-case">Click Here</Button></div>
                </form>
            </Card>
        </main>
    );
}