import "./loader.scss";
import Logo from "../../assets/logo.svg";

export default function Loader({ width, height }) {
    return <section id="loader" style={{
        width: width,
        height: height
    }} >
        <span></span>
        <span></span>
        <img src={Logo} alt="" width={60} />

    </section>;
}