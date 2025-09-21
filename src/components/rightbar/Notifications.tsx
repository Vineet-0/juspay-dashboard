import { useSelector } from "react-redux";
import { type RootState } from "../../store";
import { PiBroadcast, PiBugBeetleLight, PiUser } from "react-icons/pi";
const Notifications = () => {
    const theme = useSelector((state: RootState) => state.theme);

    const notifications = [
        {
            id: 1,
            icon: <PiBugBeetleLight size={16} />,
            message: "You have a bug that needs fixing",
            time: "Just now",
            bg: "#E3F5FF",
        },
        {
            id: 2,
            icon: <PiUser size={16} />,
            message: "New user registered",
            time: "59 minutes ago",
            bg: "#E5ECF6",
        },
        {
            id: 3,
            icon: <PiBugBeetleLight size={16} />,
            message: "You have a bug that needs fixing",
            time: "12h ago",
            bg: "#E3F5FF",
        },
        {
            id: 4,
            icon: <PiBroadcast size={16} />,
            message: "Andi Lane Subscribed to you",
            time: "Today, 11:59 AM",
            bg: "#E5ECF6",
        },
    ];
    return (
        <div className="flex flex-col">
            <h2 className="text-[#1C1C1C] dark:text-[#FFFFFF]/ px-[4px] py-[8px] rounded-[8px] text-[14px] font-[600]">
                Notifications
            </h2>
            <ul>
                {notifications.map((notification) => (
                    <li
                        key={notification.id}
                        className="py-[4px] px-[8px] mt-[8px] rounded-[8px] flex items-center gap-[8px] hover:bg-[#1C1C1C]/[5%] dark:hover:bg-[#FFFFFF]/[10%]"
                    >
                        <div
                            style={{
                                backgroundColor: `${notification.bg}`,
                            }}
                            className={`rounded-[8px] p-[4px] text-[#1C1C1C]`}
                        >
                            {notification.icon}
                        </div>
                        <div>
                            <p className="text-[#1C1C1C] dark:text-[#FFFFFF] text-[14px] h-[20px] font-[400] overflow-hidden">
                                {notification.message}
                            </p>
                            <p className="text-[#1C1C1C]/[40%] dark:text-[#FFFFFF]/[40%] text-[12px] font-[400]">
                                {notification.time}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
