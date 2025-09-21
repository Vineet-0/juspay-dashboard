import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelector } from "react-redux";
import { type RootState } from "@/store";
import { ChartTable } from "./ChartTable";

export default function ChartTableData() {
    const theme = useSelector((state: RootState) => state.theme);
    return (
        <Card className="max-h-full p-0 bg-transparent shadow-none border-0 gap-3">
            <CardHeader className="p-0 bg-transparent">
                <CardTitle
                    className={`${
                        theme === "dark" ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                    } text-[14px] font-[600]`}
                >
                    Top Selling Products
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-[-10px] flex w-full  max-h-[215px]">
                <ChartTable />
            </CardContent>
        </Card>
    );
}
