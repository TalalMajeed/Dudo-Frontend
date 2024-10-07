import "./styles.scss";

export default function Login() {
    return (
        <main id="login" className="w-[100svw] h-[100svh] flex justify-center items-center">
            <section className="flex flex-col w-[500px] h-[500px] bg-white">
                <h1>DUDO LOGIN</h1>
                <input type="text" />
                <input type="text" />
                <div>
                    <button>Forgot Your Password?</button>
                </div>
                <button>Login</button>
                <div>Register a New Team? <a href="/register">Click Here</a></div>
            </section>
        </main>
    );
}