import { type RootState } from "../store";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { useSelector } from "react-redux";

const ECommerceCard = ({
    title,
    count,
    growth,
    color,
    textColor,
}: {
    title: string;
    count: string;
    growth: string;
    color?: string;
    textColor?: string;
}) => {
    const theme = useSelector((state: RootState) => state.theme);
    return (
        <div
            style={{ color: textColor, backgroundColor: color }}
            className={`w-full h-full p-6 flex flex-col items-center justify-between gap-2`}
        >
            <div className="w-full flex flex-start font-[600]">{title}</div>
            <div className="flex w-full items-center justify-between">
                <div className="text-3xl font-[700]">{count}</div>
                <div
                    className={`flex items-center gap-1 text-s font-[400]  ${
                        growth?.[0] === "-" ? "text-red-500" : " text-green-500"
                    } `}
                >
                    {growth}
                    {growth?.[0] === "-" ? (
                        <AiOutlineFall />
                    ) : (
                        <AiOutlineRise />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ECommerceCard;
