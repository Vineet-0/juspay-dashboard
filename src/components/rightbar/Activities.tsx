import { useSelector } from "react-redux";
import { type RootState } from "../../store";
import activity1 from "../../assets/activities/1.png";
import activity2 from "../../assets/activities/2.png";
import activity3 from "../../assets/activities/3.png";
import activity4 from "../../assets/activities/4.png";
import activity5 from "../../assets/activities/5.png";

const Activities = () => {
    const theme = useSelector((state: RootState) => state.theme);

    const Activities = [
        {
            id: 1,
            image: activity1,
            message: "You have a bug that needs fixing",
            time: "Just now",
        },
        {
            id: 2,
            image: activity2,
            message: "Released a new version",
            time: "59 minutes ago",
        },
        {
            id: 3,
            image: activity3,
            message: "Submitted a bug",
            time: "12h ago",
        },
        {
            id: 4,
            image: activity4,
            message: "Modified A data in Page X",
            time: "Today, 11:59 AM",
        },
        {
            id: 5,
            image: activity5,
            message: "Deleted a Page in ProjectX",
            time: "Feb 2, 2023",
        },
    ];
    return (
        <div className="p-3 pb-5">
            <h2 className="text-lg font-semibold mb-3">Activities</h2>
            <ul
                className={`flex flex-col gap-2 h-[88%] ${
                    theme === "dark"
                        ? "scrollbar-custom-dark"
                        : "scrollbar-custom-light"
                }`}
            >
                {Activities.map((activity) => (
                    <li
                        key={activity.id}
                        className="p-1  flex items-center gap-2 relative"
                    >
                        {/* {activity.id !== Activities.length && (
                            <div
                                style={{
                                    backgroundColor: `${
                                        theme === "dark"
                                            ? "#f7f9fb"
                                            : "rgba(256, 256, 256, 0.05)"
                                    }`,
                                }}
                                className="w-1 h-8 absolute top-10 left-[22px]"
                            ></div>
                        )} */}
                        <div className={`rounded-lg p-1 text-black z-[1000]`}>
                            <img
                                src={activity.image}
                                alt={`activity-${activity.id}`}
                                className="w-8 h-8 rounded-full"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-medium">
                                {activity.message}
                            </p>
                            <p className="text-xs text-gray-500">
                                {activity.time}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Activities;
