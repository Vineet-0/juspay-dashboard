import { type RootState } from "../../store";
import React from "react";
import { PiCaretDownBold, PiCaretRightBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, toggleOpenedTab } from "../../store/sidebarSlice";

const MenuItem = ({
    newKey,
    icon,
    title,
    children,
}: {
    newKey: string;
    icon: any;
    title: "string";
    children: any;
}) => {
    console.log(newKey, title);
    const theme = useSelector((state: RootState) => state.theme);
    const { activeTab, openedTabs } = useSelector(
        (state: RootState) => state.sideBar
    );
    const dispatch = useDispatch();
    return (
        <React.Fragment key={newKey}>
            <button
                className={`${
                    theme === "dark"
                        ? "hover:bg-[#F7F9FB]/[10%]"
                        : "hover:bg-[#1C1C1C]/[5%]"
                } ${
                    activeTab === newKey &&
                    (theme === "dark"
                        ? "bg-[#F7F9FB]/[10%]"
                        : "bg-[#1C1C1C]/[5%]")
                } w-full h-[28px] mt-[4px] rounded-[8px] cursor-pointer flex justify-flex-start items-center relative`}
                onClick={() => {
                    dispatch(toggleOpenedTab(newKey));
                    dispatch(setActiveTab(newKey));
                }}
            >
                {activeTab === newKey && (
                    <div
                        className={`w-[4px] h-[16px] rounded-xl absolute ${
                            theme === "dark" ? "bg-[#C6C7F8]" : "bg-[#1C1C1C]"
                        }`}
                    ></div>
                )}
                {children && children.length > 0 ? (
                    <span className="opacity-50 flex items-center justify-center w-[24px]">
                        {false ? (
                            <PiCaretDownBold
                                className={`${
                                    theme === "dark"
                                        ? "text-[#FFFFFF]/[20%]"
                                        : "text-[#1C1C1C]/[20%]"
                                }`}
                            />
                        ) : (
                            <PiCaretRightBold
                                className={`${
                                    theme === "dark"
                                        ? "text-[#FFFFFF]/[20%]"
                                        : "text-[#1C1C1C]/[20%]"
                                }`}
                            />
                        )}
                    </span>
                ) : (
                    <span className="w-[24px]"></span>
                )}
                {icon && icon}
                <span className="px-[4px] py-[8px]">{title}</span>
            </button>
            {openedTabs?.includes(newKey) &&
                children &&
                children.length > 0 && (
                    <ul className="pl-4">
                        {children.map((child: any, childIndex: number) => (
                            <MenuItem
                                key={`${newKey}${childIndex + 1}`}
                                newKey={`${newKey}${childIndex + 1}`}
                                icon={child?.icon}
                                title={child?.name}
                                children={child?.children}
                            />
                        ))}
                    </ul>
                )}
        </React.Fragment>
    );
};

export default MenuItem;
