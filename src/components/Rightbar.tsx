import { useSelector } from "react-redux";
import { type RootState } from "../store";

const Rightbar = () => {
    const theme = useSelector((state: RootState) => state.theme);

    return (
        <div
            className={`w-64 h-screen ${
                theme === "dark"
                    ? "bg-[#1C1C1C] text-white border-zinc-800"
                    : "bg-white text-black border-gray-100"
            } p-4 border-l-2 `}
        >
            <h2 className="text-lg font-bold mb-4">Notifications</h2>
            <ul className="flex flex-col gap-2">
                <li className="p-2 bg-white shadow rounded">
                    New user registered
                </li>
                <li className="p-2 bg-white shadow rounded">
                    You have a bug that needs fixing
                </li>
                <li className="p-2 bg-white shadow rounded">
                    Released a new version
                </li>
            </ul>
        </div>
    );
};

export default Rightbar;
