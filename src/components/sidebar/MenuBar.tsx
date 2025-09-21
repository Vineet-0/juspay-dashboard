import { type RootState } from "../../store";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

const MenuBar = ({
    newKey,
    title,
    menu,
}: {
    newKey: string;
    title: string;
    menu: any;
}) => {
    const theme = useSelector((state: RootState) => state.theme);
    const { sidebarOpen } = useSelector((state: RootState) => state.layout);

    return (
        <div
            className={`w-full flex flex-col text-[14px] font-[400] transition-all duration-600 ${
                sidebarOpen ? "pb-[12px]" : ""
            }`}
            key={newKey}
        >
            {sidebarOpen && (
                <div
                    className={`w-full ${
                        theme === "dark"
                            ? "text-white opacity-60"
                            : "text-black opacity-40"
                    }  rounded-[8px] px-[12px] py-[4px]`}
                >
                    {title}
                </div>
            )}
            <div
                className={`flex flex-col transition-all duration-600 ${
                    sidebarOpen ? "gap-[0px]" : "gap-[6px]"
                }`}
            >
                {menu?.length &&
                    menu.map((item: any, index: number) => (
                        <MenuItem
                            key={`${newKey}${index + 1}`}
                            newKey={`${newKey}${index + 1}`}
                            icon={item?.icon}
                            title={item?.name}
                            children={item?.children}
                            path={item?.path}
                        />
                    ))}
            </div>
        </div>
    );
};

export default MenuBar;
