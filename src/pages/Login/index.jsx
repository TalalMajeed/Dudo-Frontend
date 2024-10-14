import "./styles.scss";
import art from '../../assets/art.png';
import logo from '../../assets/googlelogo.png';
import dudologo from '../../assets/logo.png';

export default function Login() {
    return (
        <div className="h-screen bg-gradient-to-b from-[#B6A9E0] via-[#A286DD] to-[#4E2F7F] flex items-center justify-center">
      <div className="bg-white w-[1000px] h-[600px] flex">
        <div className="w-1/2 p-5 flex flex-col items-center mt-5">
          <div className="text-center w-[300px] ">
            <div className="flex flex-col items-center">
            <img src={dudologo} alt="dudo-logo" className="h-20" />
            </div>
            <div className="text-sm text-gray-400 mt-5 text-left">
              <label htmlFor="username" className="block text-[#4E2F7F] pl-2">Username</label>
              <input 
                id="username" 
                type="text" 
                defaultValue="David Brooks" 
                className="w-full mt-1 p-2 border-b border-gray-300 outline-none" 
              />
            </div>

            <div className="text-sm text-gray-400 mt-4 text-left">
              <label htmlFor="password" className="block text-[#4E2F7F ] pl-2">Password</label>
                                 

              <input 
                id="password" 
                type="password" 
                defaultValue="********" 
                className="w-full mt-1 p-2 border-b border-gray-300 outline-none" 
              />
            </div>

            <button className="w-4/5 h-10 bg-[#4E2F7F] text-white rounded-full mt-12 text-lg font-medium">
              Sign in
            </button>

            <div className="flex items-center my-6 space-x-2">
              <div className="flex-1 border-b border-gray-300"></div>
              <span className="text-sm text-gray-400">or</span>
              <div className="flex-1 border-b border-gray-300"></div>
            </div>

            <div className="flex items-center justify-center space-x-2 cursor-pointer font-bold text-gray-700 mb-5">
              <img src={logo} alt="Google logo" className="w-8" />
              <span>Sign in with Google</span>
            </div>

            <div className="text-sm text-gray-400">
              Don't Have an Account?{" "}
              <a href="/" className="text-[#4E2F7F]">Sign up</a>
            </div>
          </div>
        </div>

        <div className="w-1/2 overflow-hidden">
          <img src={art} alt="art" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    );
}