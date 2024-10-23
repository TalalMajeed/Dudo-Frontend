import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import background from '../../assets/background.png';

function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#202124]">
            <div className="bg-white p-12 rounded-xl shadow-lg max-w-5xl flex w-full">
                <div className="flex-1 pr-10">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">
                        Log into an exsisting account<span className="text-blue-500">.</span>
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Dont have an account?{' '}
                        <a href="#" className="text-blue-500 hover:underline">
                            Sign up
                        </a>
                    </p>

                    <form>

                        <div className="relative mb-6">
                            <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                                <FaEnvelope className="text-gray-400 mx-3" />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-4 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                            </div>
                        </div>

                        <div className="relative mb-8">
                            <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                                <FaLock className="text-gray-400 mx-3" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-4 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <button
                                type="button"
                                className="flex items-center justify-center w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-lg shadow-md hover:from-red-600 hover:to-pink-600 transition-transform transform hover:scale-105"
                            >
                                <FaGoogle className="mr-2 text-lg" />
                                Sign in with Google
                            </button>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex items-center justify-center w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
                            >
                                Log into account
                            </button>
                        </div>
                    </form>
                </div>

                <div className="hidden md:flex flex-1 justify-center items-center">
                    <img
                        src={background}
                        alt="Signup illustration"
                        className="rounded-r-xl w-full max-h-[500px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
