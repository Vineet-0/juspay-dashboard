import { useSelector } from "react-redux";
import { type RootState } from "../store";

const Sidebar = () => {
    const theme = useSelector((state: RootState) => state.theme);

    return (
        <div
            className={`w-64 h-screen ${
                theme === "dark"
                    ? "bg-[#1C1C1C] text-white border-zinc-800"
                    : "bg-white text-black  border-gray-100"
            } flex flex-col border-r-2`}
        >
            <div className="p-4 text-lg font-bold">ByeWind</div>
            <ul className="flex flex-col gap-4 p-4">
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
