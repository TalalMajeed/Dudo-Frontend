import "./styles.scss";
import art3 from '../../assets/art3.png';
import dudologo from '../../assets/logo.png';
export default function Verification() {
    return (
        <div className="h-screen bg-gradient-to-b from-[#B6A9E0] via-[#A286DD] to-[#4E2F7F] flex items-center justify-center">
      <div className="bg-white w-[1000px] h-[650px] flex">
        <div className="w-1/2 p-5 flex flex-col items-center mt-5">
          <div className="text-center w-[300px] ">
            <div className="flex flex-col items-center">
            <img src={dudologo} alt="dudo-logo" className="h-20" />
            </div>
         

          </div>
        </div>

        <div className="w-1/2 overflow-hidden">
          <img src={art3} alt="art" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    );
}