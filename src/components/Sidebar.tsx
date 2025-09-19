import { useSelector } from "react-redux";
import { type RootState } from "../store";
import ByeWind from "../assets/Byewind.png";

const Sidebar = () => {
    const theme = useSelector((state: RootState) => state.theme);

    return (
        <div
            className={`w-64 h-screen ${
                theme === "dark"
                    ? "bg-[#1C1C1C] text-white border-zinc-800"
                    : "bg-white text-black border-gray-100"
            }border-r-2 flex flex-col h-full `}
        >
            <div className="h-[8%] w-full  px-6 py-3 flex items-center justify-start gap-4 font-semi text-lg">
                <img
                    src={ByeWind}
                    alt={`ByeWind Logo`}
                    className="w-8 h-8 rounded-full"
                />
                ByeWind
            </div>
            <ul className="h-[92%]  flex flex-col gap-4 p-3 overflow-y-auto">
                <li className="hover:bg-gray-200 p-2 rounded">Overview</li>
                <li className="hover:bg-gray-200 p-2 rounded">Projects</li>
                <li className="hover:bg-gray-200 p-2 rounded">eCommerce</li>
                <li className="hover:bg-gray-200 p-2 rounded">
                    Online Courses
                </li>
                
            </ul>
        </div>
    );
};

export default Sidebar;
