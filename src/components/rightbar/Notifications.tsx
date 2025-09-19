import { PiBroadcast, PiBugBeetleLight, PiUser } from "react-icons/pi";
const Notifications = () => {
    const notifications = [
        {
            id: 1,
            icon: <PiBugBeetleLight size={26} />,
            message: "You have a bug that needs fixing",
            time: "Just now",
            bg: "#E3F5FF",
        },
        {
            id: 2,
            icon: <PiUser size={26} />,
            message: "New user registered",
            time: "59 minutes ago",
            bg: "#E5ECF6",
        },
        {
            id: 3,
            icon: <PiBugBeetleLight size={26} />,
            message: "You have a bug that needs fixing",
            time: "12h ago",
            bg: "#E3F5FF",
        },
        {
            id: 4,
            icon: <PiBroadcast size={26} />,
            message: "Andi Lane Subscribed to you",
            time: "Today, 11:59 AM",
            bg: "#E5ECF6",
        },
    ];
    return (
        <div className="max-h-1/3 p-3 flex-1">
            <h2 className="text-lg font-semibold mb-2">Notifications</h2>
            <ul className="flex flex-col gap-2 h-[88%] overflow-y-auto">
                {notifications.map((notification) => (
                    <li
                        key={notification.id}
                        // style={{
                        //     backgroundColor: `${
                        //         theme === "dark"
                        //             ? "rgba(256, 256, 256, 0.05)"
                        //             : "#f7f9fb"
                        //     }`,
                        // }}
                        className="p-1  flex items-center gap-2"
                    >
                        <div
                            style={{
                                backgroundColor: `${notification.bg}`,
                            }}
                            className={`rounded-lg p-1 text-black`}
                        >
                            {notification.icon}
                        </div>
                        <div>
                            <p className="text-sm font-medium">
                                {notification.message}
                            </p>
                            <p className="text-xs text-gray-500">
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
