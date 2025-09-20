import { useSelector } from "react-redux";
import { type RootState } from "../../store";
import { OrderListTable } from "@/components/orderlist/OrderListTable";

const OrderList = () => {
    const theme = useSelector((state: RootState) => state.theme);

    return (
        <div
            className={`border-2  h-full ${
                theme === "dark" ? "border-[#1C1C1C]" : "border-[#ffffff]"
            }`}
        >
            <div
                className={`mt-[20px] ml-[28px] px-[8px] py-[4px] w-fit text-[14px] font-[600] rounded-[8px]   ${
                    theme === "dark"
                        ? "text-[#FFFFFF] hover:bg-[#FFFFFF]/[10%]"
                        : "text-[#1C1C1C] hover:bg-[#1C1C1C]/[10%]"
                }`}
            >
                Order List
            </div>
            <OrderListTable />
        </div>
    );
};

export default OrderList;
