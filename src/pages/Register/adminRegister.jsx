import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import background from '../../assets/background-wallpaper.jpg';
import { useNavigate } from 'react-router-dom';

function AdminRegister() {
    const navigate = useNavigate();
    const handleNextClick = (e) =>{
        e.preventDefault();
        const nextPage = 3;
        navigate(`/register?page=${nextPage}`);
       }
    const swicthtoLogin =(e)=> {
        e.preventDefault();
        navigate('/login');
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#202124]" 
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="bg-white p-12 rounded-xl shadow-lg flex w-full " style={{ maxWidth: '550px' }}>
                <div className="flex-1 ">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        Create new account<span className="text-[#7E5A9B]">.</span>
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Already a member?{' '}
                        <a href="#" className="text-[#7E5A9B] hover:underline" onClick={swicthtoLogin}>
                            Log In
                        </a>
                    </p>

                    <form>
                        <div className="flex space-x-4 mb-6">
                            <input
                                type="text"
                                placeholder="First name"
                                className="w-full p-4 border border-gray-300 bg-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#A286DD] transition"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="w-full p-4 border border-gray-300 bg-white rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#A286DD] transition"
                            />
                        </div>

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
                                onClick={handleNextClick}
                            >
                                Create account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminRegister;
