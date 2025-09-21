import { type RootState } from "../../store";
import { useSelector } from "react-redux";

const BreadCrumb = () => {
    const activePath = useSelector(
        (state: RootState) => state?.sideBar?.activePath
    );
    return (
        <div className="rounded-[8px] flex items-center gap-[8px]">
            {activePath?.split("/")?.map((item, index) =>
                index != activePath?.split("/")?.length - 1 ? (
                    <>
                        <button
                            className={` dark:text-[#FFFFFF]/[40%] dark:hover:bg-[#FFFFFF]/[10%] text-[#1C1C1C]/[40%] hover:bg-[#1C1C1C]/[5%] px-[8px] py-[4px] rounded-[8px] text-[14px] font-[400]s`}
                        >
                            {item}
                        </button>
                        <div
                            className={` dark:text-[#FFFFFF]/[20%] dark:hover:bg-[#FFFFFF]/[10%] text-[#1C1C1C]/[20%] hover:bg-[#1C1C1C]/[5%] text-[14px] font-[400] rounded-[8px]`}
                        >
                            /
                        </div>
                    </>
                ) : (
                    <button
                        className={` dark:text-[#FFFFFF] dark:hover:bg-[#FFFFFF]/[10%] text-[#1C1C1C] hover:bg-[#1C1C1C]/[5%] px-[8px] py-[4px] rounded-[8px] text-[14px] font-[400]`}
                    >
                        {item}
                    </button>
                )
            )}
        </div>
    );
};

export default BreadCrumb;
