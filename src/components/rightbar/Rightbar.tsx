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
                    ? "border-[rgba(255,255,255,0.1)] scrollbar-custom-dark"
                    : "border-[rgba(28,28,28,0.1)] scrollbar-custom-light"
            } border-l-[1px] flex flex-col gap-[24px] overflow-y-auto`}
        >
            <Notifications />
            <Activities />
            <Contacts />
        </div>
    );
};

export default Rightbar;
