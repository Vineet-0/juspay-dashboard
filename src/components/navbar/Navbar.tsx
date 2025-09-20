import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, toggleRightbar } from "../../store/layoutSlice";
import { setTheme } from "../../store/themeSlice";
import {
    PiSidebarDuotone,
    PiBellDuotone,
    PiClockCounterClockwiseDuotone,
    PiSunDuotone,
    PiMoonDuotone,
    PiStarDuotone,
} from "react-icons/pi";
import { type RootState } from "../../store";
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
            className={`h-[68px] px-[28px] py-[20px] ${
                theme === "dark"
                    ? "border-[rgba(255,255,255,0.1)]"
                    : "border-[rgba(28,28,28,0.1)]"
            } border-b-[1px] flex items-center justify-between gap-5`}
        >
            <div className="flex items-center gap-[8px]">
                <div className="rounded-[8px] flex items-center gap-[8px]">
                    <button
                        onClick={() => dispatch(toggleSidebar())}
                        className={`w-[28px] h-[28px] p-[4px] gap-[4px] rounded-[8px] ${
                            theme === "dark"
                                ? "hover:bg-[#FFFFFF]/[10%]"
                                : "hover:bg-[#1C1C1C]/[5%]"
                        }`}
                        title="Toggle Sidebar"
                    >
                        <PiSidebarDuotone size={20} />
                    </button>
                    <button
                        className={`w-[28px] h-[28px] p-[4px] gap-[4px] rounded-[8px] ${
                            theme === "dark"
                                ? "hover:bg-[#FFFFFF]/[10%]"
                                : "hover:bg-[#1C1C1C]/[5%]"
                        }`}
                        title="Star"
                    >
                        <PiStarDuotone size={20} />
                    </button>
                </div>
                <div className="rounded-[8px] flex items-center gap-[8px]">
                    <button
                        className={`${
                            theme === "dark"
                                ? "text-[#FFFFFF]/[40%] hover:bg-[#FFFFFF]/[10%]"
                                : "text-[#1C1C1C]/[40%] hover:bg-[#1C1C1C]/[5%]"
                        } px-[8px] py-[4px] rounded-[8px] text-[14px] font-[400]`}
                    >
                        Dashboard
                    </button>
                    <div
                        className={`${
                            theme === "dark"
                                ? "text-[#FFFFFF]/[20%] hover:bg-[#FFFFFF]/[10%]"
                                : "text-[#1C1C1C]/[20%] hover:bg-[#1C1C1C]/[5%]"
                        } text-[14px] font-[400] rounded-[8px]`}
                    >
                        /
                    </div>
                    <button
                        className={`${
                            theme === "dark"
                                ? "text-[#FFFFFF] hover:bg-[#FFFFFF]/[10%]"
                                : "text-[#1C1C1C] hover:bg-[#1C1C1C]/[5%]"
                        } px-[8px] py-[4px] rounded-[8px] text-[14px] font-[400]`}
                    >
                        Default
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-end gap-[20px] flex-1">
                <SearchBar />
                <div className="rounded-[8px] flex items-center gap-[8px]">
                    <button
                        onClick={toggleTheme}
                        className={`w-[28px] h-[28px] p-[4px] gap-[4px] rounded-[8px] ${
                            theme === "dark"
                                ? "hover:bg-[#FFFFFF]/[10%]"
                                : "hover:bg-[#1C1C1C]/[5%]"
                        }`}
                        title="Toggle Theme"
                    >
                        {theme === "light" ? (
                            <PiSunDuotone size={20} />
                        ) : (
                            <PiMoonDuotone size={20} />
                        )}
                    </button>

                    <button
                        className={`w-[28px] h-[28px] p-[4px] gap-[4px] rounded-[8px] ${
                            theme === "dark"
                                ? "hover:bg-[#FFFFFF]/[10%]"
                                : "hover:bg-[#1C1C1C]/[5%]"
                        }`}
                        title="History"
                    >
                        <PiClockCounterClockwiseDuotone size={20} />
                    </button>
                    <button
                        className={`w-[28px] h-[28px] p-[4px] gap-[4px] rounded-[8px] ${
                            theme === "dark"
                                ? "hover:bg-[#FFFFFF]/[10%]"
                                : "hover:bg-[#1C1C1C]/[5%]"
                        }`}
                        title="Notifications"
                    >
                        <PiBellDuotone size={20} />
                    </button>
                    <button
                        onClick={() => dispatch(toggleRightbar())}
                        className={`w-[28px] h-[28px] p-[4px] gap-[4px] rounded-[8px] ${
                            theme === "dark"
                                ? "hover:bg-[#FFFFFF]/[10%]"
                                : "hover:bg-[#1C1C1C]/[5%]"
                        }`}
                        title="Toggle Rightbar"
                    >
                        <PiSidebarDuotone size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
