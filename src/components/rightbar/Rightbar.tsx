import { useSelector } from "react-redux";
import { type RootState } from "../../store";
import Notifications from "./Notifications";
import Activities from "./Activities";
import Contacts from "./Contacts";

const Rightbar = () => {
    const theme = useSelector((state: RootState) => state.theme);

    return (
        <div
            className={`w-64 h-screen py-2 ${
                theme === "dark"
                    ? "bg-[#1C1C1C] text-white border-zinc-800"
                    : "bg-white text-black border-gray-100"
            }border-l-2 flex flex-col`}
        >
            <Notifications />
            <Activities />
            <Contacts />
        </div>
    );
};

export default Rightbar;
