import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import background from '../../assets/background-wallpaper.jpg';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const swicthtoRegister =(e)=> {
        e.preventDefault();
        navigate('/register');
    }
    const loggedin =(e)=> {
        e.preventDefault();
        navigate('/dashboard');
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#BEA9E0] to-[#6C4AB6]"
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
<div className="bg-white p-12 rounded-xl shadow-lg flex w-full" style={{ maxWidth: '480px' }}>
<div className="flex-1">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        Log into an existing account<span className="text-[#4E2F7F]">.</span>
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Dont have an account?{' '}
                        <a href="#" className="text-[#4E2F7F] hover:underline" onClick={swicthtoRegister}>
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
                                    className="w-full p-4 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-[#A286DD] transition"
                                />
                            </div>
                        </div>

                        <div className="relative mb-8">
                            <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                                <FaLock className="text-gray-400 mx-3" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-4 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-[#A286DD] transition"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <button
                                type="button"
                                className="flex items-center justify-center w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-lg shadow-md hover:from-red-600 hover:to-pink-600 transition-transform transform hover:scale-104"
                            >
                                <FaGoogle className="mr-2 text-lg" />
                                Sign in with Google
                            </button>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex items-center justify-center w-full bg-[#A286DD] text-white py-3 rounded-lg hover:bg-[#7E5A9B] transition"
                                onClick={loggedin}
                            >
                                Log into account
                            </button>
                        </div>
                    </form>
                </div>

              
            </div>
        </div>
    );
}

export default Login;
