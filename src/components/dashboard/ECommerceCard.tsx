import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";

const ECommerceCard = ({
    title,
    count,
    growth,
    textColor,
}: {
    title: string;
    count: string;
    growth: string;
    textColor: string;
}) => {
    return (
        <div
            style={{ color: textColor }}
            className={`w-full h-full flex flex-col justify-between gap-2`}
        >
            <div className="w-full flex flex-start text-[14px] font-[600]">
                {title}
            </div>
            <div className="flex w-full items-center justify-between">
                <div className="text-[24px] font-[600]">{count}</div>
                <div
                    className={`flex items-center gap-1 text-[12px] font-[400] `}
                >
                    {growth}
                    {growth?.[0] === "-" ? (
                        <AiOutlineFall size={16} fontWeight={700} />
                    ) : (
                        <AiOutlineRise size={16} fontWeight={700} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ECommerceCard;
