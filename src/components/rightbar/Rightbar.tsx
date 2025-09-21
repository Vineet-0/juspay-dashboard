import { useSelector } from "react-redux";
import { type RootState } from "../../store";
import Notifications from "./Notifications";
import Activities from "./Activities";
import Contacts from "./Contacts";

const Rightbar = () => {
    const { rightbarOpen } = useSelector((state: RootState) => state.layout);

    return (
        <div
            className={`${
                rightbarOpen ? "w-[280px] px-[20px]" : "w-[0px] px-[0px]"
            } h-screen py-[20px] transition-all duration-600 border-[#1C1C1C]/[10%] dark:border-[#FFFFFF]/[10%] scrollbar-custom-light dark:scrollbar-custom-dark border-l-[1px] flex flex-col gap-[24px] overflow-x-hidden overflow-y-auto`}
        >
            <Notifications />
            <Activities />
            <Contacts />
        </div>
    );
};

export default Rightbar;
