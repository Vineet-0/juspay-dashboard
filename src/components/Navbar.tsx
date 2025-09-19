import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, toggleRightbar } from "../store/layoutSlice";
import { setTheme } from "../store/themeSlice";
import {
    PiSidebarDuotone,
    PiBellDuotone,
    PiClockCounterClockwiseDuotone,
    PiSunDuotone,
    PiMoonDuotone,
    PiStarDuotone,
} from "react-icons/pi";
import { type RootState } from "../store";
import SearchBar from "./SearchBar";

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        dispatch(setTheme(newTheme));
    };

    return (
        <div
            className={`h-40 ${
                theme === "dark"
                    ? "bg-[#1C1C1C] text-white border-zinc-800"
                    : "bg-white text-black border-gray-100"
            } border-b-2  flex items-center justify-between gap-5 px-6`}
        >
            <div className="flex gap-4 items-center justify-end">
                <button onClick={() => dispatch(toggleSidebar())} className="">
                    <PiSidebarDuotone size={24} />
                </button>
                <button className="">
                    <PiStarDuotone size={24} />
                </button>
                <div className="text-md font-[300] opacity-40">Dashboard</div>
                <div className="text-md font-[300]">/</div>
                <div className="text-md font-[300]">Default</div>
            </div>

            <div className="flex gap-4 items-center justify-end flex-1">
                <SearchBar />
                <button onClick={toggleTheme} className="">
                    {theme === "light" ? (
                        <PiSunDuotone size={24} />
                    ) : (
                        <PiMoonDuotone size={24} />
                    )}
                </button>

                <button className="">
                    <PiClockCounterClockwiseDuotone size={24} />
                </button>
                <button className="">
                    <PiBellDuotone size={24} />
                </button>
                <button onClick={() => dispatch(toggleRightbar())} className="">
                    <PiSidebarDuotone size={24} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
