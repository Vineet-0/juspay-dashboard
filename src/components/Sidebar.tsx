import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../store/activeTabSlice";
import { type RootState } from "../store";
import byewind from "../assets/ByeWind.png";
import MenuBar from "./MenuBar";
import {
    PiBookOpenDuotone,
    PiChatsTeardropDuotone,
    PiFolderDuotone,
    PiIdentificationBadgeDuotone,
    PiIdentificationCardDuotone,
    PiNotebookDuotone,
    PiShoppingBagOpenDuotone,
    PiUsersThreeDuotone,
} from "react-icons/pi";

const Sidebar = () => {
    const dispatch = useDispatch();
    const activeTab = useSelector(
        (state: RootState) => state.activeTab.activeTab
    );
    const theme = useSelector((state: RootState) => state.theme);
    const sideMenuBar = [
        {
            name: "Dashboard",
            id: "",
            menu: [
                {
                    name: "Default",
                    icon: <PiFolderDuotone size={24} />,
                    id: "",
                    children: [],
                },
                {
                    name: "eCommerce",
                    icon: <PiShoppingBagOpenDuotone size={24} />,
                    id: "",
                    children: [
                        {
                            name: "Option-1",
                            id: "",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Projects",
                    icon: <PiFolderDuotone size={24} />,
                    id: "",
                    children: [
                        {
                            name: "Option-1",
                            id: "",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Online Courses",
                    icon: <PiBookOpenDuotone size={24} />,
                    id: "",
                    children: [
                        {
                            name: "Option-1",
                            id: "",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "",
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: "User Profile",
            id: "",
            menu: [
                {
                    name: "User Profile",
                    icon: <PiIdentificationBadgeDuotone size={24} />,
                    id: "",
                    children: [
                        {
                            name: "Overview",
                            id: "",
                            children: [],
                        },
                        {
                            name: "Projects",
                            id: "",
                            children: [],
                        },
                        {
                            name: "Campaigns",
                            id: "",
                            children: [],
                        },
                        {
                            name: "Documents",
                            id: "",
                            children: [],
                        },
                        {
                            name: "Followers",
                            id: "",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Account",
                    icon: <PiIdentificationCardDuotone size={24} />,
                    id: "",
                    children: [
                        {
                            name: "Option-1",
                            id: "",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Corporate",
                    icon: <PiUsersThreeDuotone size={24} />,
                    id: "",
                    children: [
                        {
                            name: "Option-1",
                            id: "",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Blog",
                    icon: <PiNotebookDuotone size={24} />,
                    id: "",
                    children: [
                        {
                            name: "Option-1",
                            id: "",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Social",
                    icon: <PiChatsTeardropDuotone size={24} />,
                    id: "",
                    children: [
                        {
                            name: "Option-1",
                            id: "",
                            children: [],
                        },
                        {
                            name: "Option-2",
                            id: "",
                            children: [],
                        },
                    ],
                },
            ],
        },
    ];

    const handleMenuClick = (name: string) => {
        dispatch(setActiveTab(name));
    };

    const renderMenu = (menu: any[], level = 0) => {
        return menu.map((item) => (
            <div
                key={item.name}
                className={`pl-${level * 4} py-2 cursor-pointer ${
                    activeTab === item.name ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleMenuClick(item.name)}
            >
                {item.name}
                {item.children && renderMenu(item.children, level + 1)}
            </div>
        ));
    };

    return (
        <div
            className={`w-64 h-screen ${
                theme === "dark"
                    ? "bg-[#1C1C1C] text-white border-zinc-800"
                    : "bg-white text-black border-gray-100"
            } border-r-2 flex flex-col h-full `}
        >
            <div className="h-[8%] w-full  px-6 py-3 flex items-center justify-start gap-4 font-semi text-lg">
                <img
                    src={byewind}
                    alt={`ByeWind Logo`}
                    className="w-8 h-8 rounded-full"
                />
                ByeWind
            </div>
            <div
                className={`p-5 h-[92%] ${
                    theme === "dark"
                        ? "scrollbar-custom-dark"
                        : "scrollbar-custom-light"
                } overflow-y-auto flex flex-col items-center justify-items-start gap-5`}
            >
                <div className="w-full">
                    <div
                        className={`w-full mb-2 flex items-center justify-around ${
                            theme === "dark"
                                ? "text-white opacity-60"
                                : "text-black opacity-40"
                        } `}
                    >
                        <div>Favorites</div>
                        <div>Recently</div>
                    </div>
                    <ul>
                        <li
                            className={`${
                                theme === "dark"
                                    ? "hover:bg-gray-700"
                                    : "hover:bg-gray-200"
                            } p-2 rounded cursor-pointer`}
                        >
                            Overview
                        </li>
                        <li
                            className={`${
                                theme === "dark"
                                    ? "hover:bg-gray-700"
                                    : "hover:bg-gray-200"
                            } p-2 rounded cursor-pointer`}
                        >
                            Projects
                        </li>
                    </ul>
                </div>
                {[
                    sideMenuBar.map((menu: any, index: number) => (
                        <MenuBar
                            key={index}
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
