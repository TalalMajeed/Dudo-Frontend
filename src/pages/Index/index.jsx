import "./styles.scss";
import Loader from "../../features/loader/loader";
import { Button, TextField, Card } from "@mui/material";


export default function Index() {
    return <main id="index">
        <section className="flex place-content-between items-center m-[15px]">
            <h1 className="text-3xl font-bold mr-[25px]">DUDO</h1>
            <div className="flex gap-[40px]">
                <a className="text-lg" href="#">How it works</a>
                <a className="text-lg" href="#">About</a>
                <a className="text-lg" href="#">Docs</a>
            </div>
            <div className="flex gap-[10px]">
                <Button variant="outlined" className="!normal-case !text-base w-[100px] h-[45px]">Sign In</Button>
                <Button variant="contained" className="!normal-case !text-base w-[100px] h-[45px]">Sign Up</Button>
            </div>
        </section>
        <hr />
        <section className="mt-[80px] text-center flex items-center flex-col">
            <h1 className="text-[3.7rem] font-semibold">Collaborate smarter with </h1>
            <h1 className="text-[3.7rem] font-semibold">streamlined workflow</h1>
            <div className="flex gap-[10px] mt-[30px]">
                <TextField variant="outlined" label="Enter your email" className="w-[400px] h-[50px] mt-[20px]" />
                <Button variant="contained" className="!normal-case !text-base w-[120px] h-[55px] mt-[10px]">Subscribe</Button>
            </div>
            <p className="mt-[30px]">Privacy and security at every step of integration</p>
        </section>
    </main>;
}