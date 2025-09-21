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
        <div className="flex flex-col">
            <h2
                className={`dark:text-[#FFFFFF] text-[#1C1C1C] px-[4px] py-[8px] rounded-[8px] text-[14px] font-[600]`}
            >
                Activities
            </h2>
            <ul>
                {Activities.map((activity) => (
                    <li
                        key={activity.id}
                        className={`py-[4px] px-[8px] mt-[8px] rounded-[8px] flex items-center gap-[8px] relative dark:hover:bg-[#F7F9FB]/[10%] -[#1C1C1C]/[5%]`}
                    >
                        {activity.id !== Activities.length && (
                            <div
                                className={`dark:bg-[#FFFFFF]/[10%] bg-[#1C1C1C]/[10%] w-[1px] h-[14px] absolute left-[23px] top-[43px]`}
                            ></div>
                        )}
                        <div className={`rounded-[8px] p-[4px]`}>
                            <img
                                src={activity.image}
                                alt={`activity-${activity.id}`}
                                className="w-[24px] h-[24px] rounded-[80px]"
                            />
                        </div>
                        <div>
                            <p
                                className={`${
                                    theme === "dark"
                                        ? "text-[#FFFFFF]"
                                        : "text-[#1C1C1C]"
                                } text-[14px] h-[20px] font-[400] overflow-hidden`}
                            >
                                {activity.message}
                            </p>
                            <p
                                className={`${
                                    theme === "dark"
                                        ? "text-[#FFFFFF]/[40%]"
                                        : "text-[#1C1C1C]/[40%]"
                                } text-[12px] font-[400]`}
                            >
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
