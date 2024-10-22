import "./styles.scss";
import Button from '@mui/material/Button';

export default function Panel() {
    return (
        <main id="panel" className="flex justify-between w-[100svw] h-[100svh]">
            <div className="w-[300px] bg-[#0f0] flex flex-col items-center">
                <div>DUDO PANEL</div>
                <div>DUDO PANEL</div>
                <div>DUDO PANEL</div>
                <div>DUDO PANEL</div>
                <div>DUDO PANEL</div>
                <div>DUDO PANEL</div>
            </div>
            <div className="bg-[#00f] grow w-full">
                <Button className="w-[300px] h-[100px] !text-3xl" variant="contained">Contained</Button>
            </div>
        </main>
    );
}