 import { useNavigate } from 'react-router-dom';
 import background from '../../assets/background-wallpaper.jpg';
function TeamInfo() {
  const navigate = useNavigate();

   const handleNextClick = (e) =>{
     e.preventDefault();
     const nextPage = 2;
     navigate(`/register?page=${nextPage}`);
    }
    const switchtoLogin = (e)=>{
        e.preventDefault();
        navigate('/login')
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#A286DD] to-[#C4A4F6]"
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="bg-white p-12 rounded-xl shadow-lg max-w-xl flex w-full">
                <div className="flex-1 ">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        Team Info<span className="text-[#7E5A9B]">.</span>
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Already a member?{' '}
                        <a href="#" className="text-[#7E5A9B] hover:underline" onClick={switchtoLogin}>
                            Log In
                        </a>
                    </p>

                    <form>
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Team Name"
                                className="w-full p-4 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A286DD] transition"
                            />
                            
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-600 mb-2">Select Team Size:</p>
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    className="flex-1 py-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-[#A286DD] hover:text-white transition"
                                >
                                    Small
                                </button>
                                <button
                                    type="button"
                                    className="flex-1 py-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-[#A286DD] hover:text-white transition"
                                >
                                    Medium
                                </button>
                                <button
                                    type="button"
                                    className="flex-1 py-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-[#A286DD] hover:text-white transition"
                                >
                                    Large
                                </button>
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="text-gray-600 mb-2 block">Select Industry:</label>
                            <select
                                className="w-full p-4 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A286DD] transition"
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
                                type="submit"
                                className="flex-1 bg-[#A286DD] text-white py-3 rounded-lg hover:bg-[#7E5A9B] transition"
                                onClick={handleNextClick}
                            >
                                next
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default TeamInfo;
