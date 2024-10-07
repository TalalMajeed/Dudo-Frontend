import "./styles.scss";
import { Button, TextField } from "@mui/material";

export default function Login() {
    return (
        <main id="login" className="w-[100svw] h-[100svh] flex justify-center items-center">
            <section className="flex flex-col w-[500px] h-[500px] bg-white">
                <h1>DUDO LOGIN</h1>
                <TextField label="Email" type="text" />
                <TextField label="password" type="text" />
                <div>
                    <Button>Forgot Your Password?</Button>
                </div>
                <Button>Login</Button>
                <div>Register a New Team? <Button>Click Here</Button></div>
            </section>
        </main>
    );
}