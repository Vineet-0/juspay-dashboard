import React, { useState } from "react";
import { PiCaretDownBold, PiCaretRightBold } from "react-icons/pi";

const MenuBar = ({
    key,
    title,
    menu,
}: {
    key: number;
    title: string;
    menu: any;
}) => {
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    const toggleItem = (itemKey: string) => {
        setOpenItems((prev) => ({
            ...prev,
            [itemKey]: !prev[itemKey],
        }));
    };

    return (
        <div className="w-full" key={key}>
            <div className="w-full text-black opacity-40">{title}</div>
            <ul>
                {menu.map((item: any, index: number) => {
                    const itemKey = `${key}+${index}`;
                    const isOpen = openItems[itemKey] || false;

                    return (
                        <React.Fragment key={itemKey}>
                            <li
                                className="hover:bg-gray-200 p-2 rounded cursor-pointer flex justify-flex-start items-center gap-2"
                                onClick={() => toggleItem(itemKey)}
                            >
                                {item.children && item.children.length > 0 ? (
                                    <span className="opacity-50">
                                        {isOpen ? (
                                            <PiCaretDownBold />
                                        ) : (
                                            <PiCaretRightBold />
                                        )}
                                    </span>
                                ) : (
                                    <span className="w-4.5"></span>
                                )}
                                {item.icon}
                                <span>{item.name}</span>
                            </li>
                            {item.children &&
                                item.children.length > 0 &&
                                isOpen && (
                                    <ul className="pl-4">
                                        {item.children.map(
                                            (
                                                child: any,
                                                childIndex: number
                                            ) => (
                                                <li
                                                    key={`${itemKey}+${childIndex}`}
                                                    className="hover:bg-gray-200 p-2 rounded cursor-pointer ml-6"
                                                >
                                                    {child.name}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    );
};

export default MenuBar;
