import SlidingButton from "../../features/loader/SlidingButton";
function Signup() {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-[#2A2A40] p-8 rounded-lg shadow-lg w-full max-w-md">
              <SlidingButton/>
                <h1 className="text-3xl font-bold text-white mb-4">Create new account<span className="text-blue-500">.</span></h1>
                <p className="text-gray-400 mb-6">Already A Member? <a href="#" className="text-blue-500">Log In</a></p>
                <form>
                    <div className="flex space-x-4 mb-4">
                        <div className="relative flex-1">
                            <input type="text" placeholder="First name" className="w-full p-3 bg-[#3B3B51] text-white rounded-lg focus:outline-none" />
                            <i className="fas fa-user absolute right-3 top-3 text-gray-400"></i>
                        </div>
                        <div className="relative flex-1">
                            <input type="text" placeholder="Last name" className="w-full p-3 bg-[#3B3B51] text-white rounded-lg focus:outline-none" />
                            <i className="fas fa-user absolute right-3 top-3 text-gray-400"></i>
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <input type="email" placeholder="Email" className="w-full p-3 bg-[#3B3B51] text-white rounded-lg focus:outline-none" />
                        <i className="fas fa-envelope absolute right-3 top-3 text-gray-400"></i>
                    </div>
                    <div className="relative mb-6">
                        <input type="password" placeholder="Password"  className="w-full p-3 bg-[#3B3B51] text-white rounded-lg focus:outline-none" />
                        <i className="fas fa-lock absolute right-3 top-3 text-gray-400"></i>
                    </div>
                    <div className="flex space-x-4">
                        <button type="button" className="flex-1 bg-gray-500 text-white py-3 rounded-lg">Change method</button>
                        <button type="submit" className="flex-1 bg-blue-500 text-white py-3 rounded-lg">Create account</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
