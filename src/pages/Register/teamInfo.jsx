import { FaArrowLeft } from 'react-icons/fa';
import background from '../../assets/background.png';

function TeamInfo() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#202124]">
            <div className="bg-white p-12 rounded-xl shadow-lg max-w-5xl flex w-full">
                <div className="flex-1 pr-10">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        Team Info<span className="text-blue-500">.</span>
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Already a member?{' '}
                        <a href="#" className="text-blue-500 hover:underline">
                            Log In
                        </a>
                    </p>

                    <form>
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Team Name"
                                className="w-full p-4 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-600 mb-2">Select Team Size:</p>
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    className="flex-1 py-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white transition"
                                >
                                    Small
                                </button>
                                <button
                                    type="button"
                                    className="flex-1 py-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white transition"
                                >
                                    Medium
                                </button>
                                <button
                                    type="button"
                                    className="flex-1 py-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white transition"
                                >
                                    Large
                                </button>
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="text-gray-600 mb-2 block">Select Industry:</label>
                            <select
                                className="w-full p-4 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            >
                                <option value="">Choose an industry</option>
                                <option value="tech">Technology</option>
                                <option value="finance">Finance</option>
                                <option value="healthcare">Healthcare</option>
                                <option value="education">Education</option>
                            </select>
                        </div>

                        <div className="flex space-x-4">
                            <button
                                type="button"
                                className="flex items-center justify-center flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-lg shadow-md hover:from-red-600 hover:to-pink-600 transition-transform transform hover:scale-105"
                            >
                                <FaArrowLeft className="mr-2 text-lg" />
                                previous
                            </button>

                            <button
                                type="submit"
                                className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
                            >
                                next
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

export default TeamInfo;
