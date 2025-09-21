import { useSelector } from "react-redux";
import { type RootState } from "../../store";
import byewind from "../../assets/ByeWind.png";
import MenuBar from "./MenuBar";
import {
    PiBookOpenDuotone,
    PiChartPieSliceDuotone,
    PiChatsTeardropDuotone,
    PiCircleFill,
    PiFolderDuotone,
    PiIdentificationBadgeDuotone,
    PiIdentificationCardDuotone,
    PiListChecksDuotone,
    PiNotebookDuotone,
    PiShoppingBagOpenDuotone,
    PiUsersThreeDuotone,
} from "react-icons/pi";

const Sidebar = () => {
    const theme = useSelector((state: RootState) => state.theme);
    const { sidebarOpen } = useSelector((state: RootState) => state.layout);
    const sideBarMenu = [
        {
            name: "Dashboard",
            id: "1",
            menu: [
                {
                    name: "Default",
                    path: "Dashboard/Default",
                    icon: (
                        <PiChartPieSliceDuotone size={sidebarOpen ? 18 : 25} />
                    ),
                    id: "1",
                    children: [],
                },
                {
                    name: "Order List",
                    path: "Dashboard/Order List",
                    icon: <PiListChecksDuotone size={sidebarOpen ? 18 : 25} />,
                    id: "2",
                    children: [],
                },
                {
                    name: "eCommerce",
                    path: "Dashboard/eCommerce",
                    icon: (
                        <PiShoppingBagOpenDuotone
                            size={sidebarOpen ? 18 : 25}
                        />
                    ),
                    id: "3",
                    children: [
                        {
                            name: "Option-1",
                            path: "Dashboard/eCommerce/Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            path: "Dashboard/eCommerce/Option-2",
                            id: "2",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Projects",
                    path: "Dashboard/Projects",
                    icon: <PiFolderDuotone size={sidebarOpen ? 18 : 25} />,
                    id: "4",
                    children: [
                        {
                            name: "Option-1",
                            path: "Dashboard/Projects/Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            path: "Dashboard/Projects/Option-2",
                            id: "2",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Online Courses",
                    path: "Dashboard/Online Courses",
                    icon: <PiBookOpenDuotone size={sidebarOpen ? 18 : 25} />,
                    id: "5",
                    children: [
                        {
                            name: "Option-1",
                            path: "Dashboard/Online Courses/Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            path: "Dashboard/Online Courses/Option-2",
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
                    path: "User Profile/User Profile",
                    icon: (
                        <PiIdentificationBadgeDuotone
                            size={sidebarOpen ? 18 : 25}
                        />
                    ),
                    id: "1",
                    children: [
                        {
                            name: "Overview",
                            path: "User Profile/User Profile/Overview",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Projects",
                            path: "User Profile/User Profile/Projects",
                            id: "2",
                            children: [],
                        },
                        {
                            name: "Campaigns",
                            path: "User Profile/User Profile/Campaigns",
                            id: "3",
                            children: [],
                        },
                        {
                            name: "Documents",
                            path: "User Profile/User Profile/Documents",
                            id: "4",
                            children: [],
                        },
                        {
                            name: "Followers",
                            path: "User Profile/User Profile/Followers",
                            id: "5",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Account",
                    path: "User Profile/Account",
                    icon: (
                        <PiIdentificationCardDuotone
                            size={sidebarOpen ? 18 : 25}
                        />
                    ),
                    id: "2",
                    children: [
                        {
                            name: "Option-1",
                            path: "User Profile/Account/Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            path: "User Profile/Account/Option-2",
                            id: "2",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Corporate",
                    path: "User Profile/Corporate",
                    icon: <PiUsersThreeDuotone size={sidebarOpen ? 18 : 25} />,
                    id: "3",
                    children: [
                        {
                            name: "Option-1",
                            path: "User Profile/Corporate/Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            path: "User Profile/Corporate/Option-2",
                            id: "2",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Blog",
                    path: "User Profile/Blog",
                    icon: <PiNotebookDuotone size={sidebarOpen ? 18 : 25} />,
                    id: "4",
                    children: [
                        {
                            name: "Option-1",
                            path: "User Profile/Blog/Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            path: "User Profile/Blog/Option-2",
                            id: "2",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Social",
                    path: "User Profile/Social",
                    icon: (
                        <PiChatsTeardropDuotone size={sidebarOpen ? 18 : 25} />
                    ),
                    id: "5",
                    children: [
                        {
                            name: "Option-1",
                            path: "User Profile/Option-1",
                            id: "1",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            path: "User Profile/Option-2",
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
            className={`${
                sidebarOpen ? "w-[212px] px-[16px]" : "fit px-[12px]"
            } transition-all duration-600 h-screen  pt-[20px] pb-[10px] flex flex-col border-r-[1px] gap-[16px] ${
                theme === "dark"
                    ? "border-[#FFFFFF]/[10%]"
                    : "border-[#1C1C1C]/[10%]"
            }`}
        >
            {sidebarOpen ? (
                <div className="w-full h-[32px] p-[4px] flex items-center justify-start gap-[8px] text-[14px] font-[400]">
                    <img
                        src={byewind}
                        alt={`ByeWind Logo`}
                        className="w-[24px] h-[24px] rounded-full"
                    />
                    ByeWind
                </div>
            ) : (
                <img
                    src={byewind}
                    alt={`ByeWind Logo`}
                    className="w-[35px] h-[35px] rounded-full mb-4 transition-all duration-600"
                />
            )}
            <div
                className={`flex flex-col flex-1 ${
                    theme === "dark"
                        ? "scrollbar-custom-dark"
                        : "scrollbar-custom-light"
                } overflow-y-auto flex flex-col items-center justify-items-start transition-all duration-600 ${
                    sidebarOpen ? " gap-[16px]" : "gap-[6px]"
                }`}
            >
                {sidebarOpen && (
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
                                <div className="flex items-center gap-[6px]">
                                    <PiCircleFill
                                        size={8}
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
                                <div className="flex items-center gap-[6px]">
                                    <PiCircleFill
                                        size={8}
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
                )}
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
