import { useSelector } from "react-redux";
import { type RootState } from "../../store";
import byewind from "../../assets/ByeWind.png";
import MenuBar from "./MenuBar";
import {
    PiBookOpenDuotone,
    PiChartPieSliceDuotone,
    PiChatsTeardropDuotone,
    PiDotOutlineFill,
    PiFolderDuotone,
    PiIdentificationBadgeDuotone,
    PiIdentificationCardDuotone,
    PiNotebookDuotone,
    PiShoppingBagOpenDuotone,
    PiUsersThreeDuotone,
} from "react-icons/pi";

const Sidebar = () => {
    const theme = useSelector((state: RootState) => state.theme);
    const sideBarMenu = [
        {
            name: "Dashboard",
            id: "1",
            menu: [
                {
                    name: "Default",
                    icon: <PiChartPieSliceDuotone size={18} />,
                    id: "1",
                    children: [],
                },
                {
                    name: "eCommerce",
                    icon: <PiShoppingBagOpenDuotone size={18} />,
                    id: "2",
                    children: [
                        {
                            name: "Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "2",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Projects",
                    icon: <PiFolderDuotone size={18} />,
                    id: "3",
                    children: [
                        {
                            name: "Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "2",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Online Courses",
                    icon: <PiBookOpenDuotone size={18} />,
                    id: "4",
                    children: [
                        {
                            name: "Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "2",
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: "User Profile",
            id: "2",
            menu: [
                {
                    name: "User Profile",
                    icon: <PiIdentificationBadgeDuotone size={18} />,
                    id: "1",
                    children: [
                        {
                            name: "Overview",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Projects",
                            id: "2",
                            children: [],
                        },
                        {
                            name: "Campaigns",
                            id: "3",
                            children: [],
                        },
                        {
                            name: "Documents",
                            id: "4",
                            children: [],
                        },
                        {
                            name: "Followers",
                            id: "5",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Account",
                    icon: <PiIdentificationCardDuotone size={18} />,
                    id: "2",
                    children: [
                        {
                            name: "Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "2",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Corporate",
                    icon: <PiUsersThreeDuotone size={18} />,
                    id: "3",
                    children: [
                        {
                            name: "Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "2",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Blog",
                    icon: <PiNotebookDuotone size={18} />,
                    id: "4",
                    children: [
                        {
                            name: "Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "2",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Social",
                    icon: <PiChatsTeardropDuotone size={18} />,
                    id: "5",
                    children: [
                        {
                            name: "Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "2",
                            children: [],
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <div
            className={`w-[212px] h-screen px-[16px] py-[20px] flex flex-col border-r-[1px] gap-[16px] ${
                theme === "dark"
                    ? " border-[rgba(255,255,255,0.1)]"
                    : "border-[rgba(28,28,28,0.1)]"
            }`}
        >
            <div className="w-full h-[32px] p-[4px] flex items-center justify-start gap-[8px] text-[14px] font-[400]">
                <img
                    src={byewind}
                    alt={`ByeWind Logo`}
                    className="w-[24px] h-[24px] rounded-full"
                />
                ByeWind
            </div>
            <div
                className={`flex flex-col flex-1 ${
                    theme === "dark"
                        ? "scrollbar-custom-dark"
                        : "scrollbar-custom-light"
                } overflow-y-auto flex flex-col items-center justify-items-start gap-[16px]`}
            >
                <div className="w-full pb-[12px]">
                    <div
                        className={`w-full mb-2 flex items-center justify-around text-[14px] font-[400] ${
                            theme === "dark"
                                ? "text-white opacity-60"
                                : "text-black opacity-40"
                        } `}
                    >
                        <button
                            className={`${
                                theme === "dark"
                                    ? "text-[#FFFFFF]/[40%] hover:bg-[#F7F9FB]/[10%]"
                                    : "text-[#1C1C1C]/[40%] hover:bg-[#1C1C1C]/[5%]"
                            } px-[8px] py-[4px] rounded-[8px]`}
                        >
                            Favorites
                        </button>
                        <button
                            className={`${
                                theme === "dark"
                                    ? "text-[#FFFFFF]/[40%] hover:bg-[#F7F9FB]/[10%]"
                                    : "text-[#1C1C1C]/[40%] hover:bg-[#1C1C1C]/[5%]"
                            } px-[8px] py-[4px] rounded-[8px]`}
                        >
                            Recently
                        </button>
                    </div>
                    <ul>
                        <li
                            className={`${
                                theme === "dark"
                                    ? "hover:bg-[#F7F9FB]/[10%]"
                                    : "hover:bg-[#F7F9FB]/[5%]"
                            } m-0 px-[8px] py-[4px] text-[14px] font-[400] rounded cursor-pointer`}
                        >
                            <div className="flex items-center gap-[4px]">
                                <PiDotOutlineFill
                                    size={18}
                                    className={`${
                                        theme === "dark"
                                            ? "text-[#FFFFFF]/[20%]"
                                            : "text-[#1C1C1C]/[20%]"
                                    }`}
                                />
                                <div
                                    className={`${
                                        theme === "dark"
                                            ? "text-[#FFFFFF]"
                                            : "text-[#1C1C1C]"
                                    }`}
                                >
                                    Overview
                                </div>
                            </div>
                        </li>
                        <li
                            className={`${
                                theme === "dark"
                                    ? "hover:bg-[#F7F9FB]/[10%]"
                                    : "hover:bg-[#F7F9FB]/[5%]"
                            } m-0 px-[8px] py-[4px] text-[14px] font-[400] rounded cursor-pointer`}
                        >
                            <div className="flex items-center gap-[4px]">
                                <PiDotOutlineFill
                                    size={18}
                                    className={`${
                                        theme === "dark"
                                            ? "text-[#FFFFFF]/[20%]"
                                            : "text-[#1C1C1C]/[20%]"
                                    }`}
                                />
                                <div
                                    className={`${
                                        theme === "dark"
                                            ? "text-[#FFFFFF]"
                                            : "text-[#1C1C1C]"
                                    }`}
                                >
                                    Projects
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {[
                    sideBarMenu.map((menu: any, index: number) => (
                        <MenuBar
                            key={index + 1}
                            newKey={`${index + 1}`}
                            title={menu.name}
                            menu={menu.menu}
                        />
                    )),
                ]}
            </div>
        </div>
    );
};

export default Sidebar;
