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
    return (
        <div
            className="w-full flex flex-col text-[14px] font-[400] pb-[12px]"
            key={newKey}
        >
            <div
                className={`w-full ${
                    theme === "dark"
                        ? "text-white opacity-60"
                        : "text-black opacity-40"
                }  rounded-[8px] px-[12px] py-[4px]`}
            >
                {title}
            </div>
            <ul>
                {menu?.length &&
                    menu.map((item: any, index: number) => (
                        <MenuItem
                            key={`${newKey}${index + 1}`}
                            newKey={`${newKey}${index + 1}`}
                            icon={item?.icon}
                            title={item?.name}
                            children={item?.children}
                        />
                    ))}
            </ul>
        </div>
    );
};

export default MenuBar;
