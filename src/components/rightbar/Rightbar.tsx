import { useSelector } from "react-redux";
import { type RootState } from "../../store";
import Notifications from "./Notifications";
import Activities from "./Activities";
import Contacts from "./Contacts";

const Rightbar = () => {
    const theme = useSelector((state: RootState) => state.theme);

    return (
        <div
            className={`w-[280px] h-screen p-[20px] ${
                theme === "dark"
                    ? "border-[#FFFFFF]/[10%] scrollbar-custom-dark"
                    : "border-[#1C1C1C]/[10%] scrollbar-custom-light"
            } border-l-[1px] flex flex-col gap-[24px] overflow-y-auto`}
        >
            <Notifications />
            <Activities />
            <Contacts />
        </div>
    );
};

export default Rightbar;
