import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useSelector } from "react-redux";
import { type RootState } from "@/store";

const tableData: DashboardTable[] = [
    {
        id: "1",
        name: "ASOS Ridley High Waist",
        price: "79.49",
        quantity: "82",
    },
    {
        id: "2",
        name: "Marco Lightweight Shirt",
        price: "128.50",
        quantity: "37",
    },
    {
        id: "3",
        name: "Half Sleeve  Shirt",
        price: "39.99",
        quantity: "64",
    },
    {
        id: "4",
        name: "Lightweight Jacket",
        price: "20.00",
        quantity: "184",
    },
    {
        id: "5",
        name: "Marco Shoes",
        price: "79.49",
        quantity: "64",
    },
];

export type DashboardTable = {
    id: string;
    name: string;
    price: string;
    quantity: string;
};

export function ChartTable() {
    const theme = useSelector((state: RootState) => state.theme);

    return (
        <Table>
            <TableHeader>
                <TableRow
                    className={`text-[12px] font-[400] ${
                        theme === "dark"
                            ? "text-[#FFFFFF]/[40%] border-[#FFFFFF]/[20%] hover:bg-[#FFFFFF]/[5%]"
                            : "text-[#1C1C1C]/[40%] border-[#1C1C1C]/[20%] hover:bg-[#1C1C1C]/[5%]"
                    }`}
                >
                    <TableHead
                        className={`${
                            theme === "dark"
                                ? "text-[#FFFFFF]/[40%]"
                                : "text-[#1C1C1C]/[40%]"
                        } min-w-[100px] flex-1`}
                    >
                        Name
                    </TableHead>
                    <TableHead
                        className={`${
                            theme === "dark"
                                ? "text-[#FFFFFF]/[40%]"
                                : "text-[#1C1C1C]/[40%]"
                        } min-w-[100px] flex-1`}
                    >
                        Price
                    </TableHead>
                    <TableHead
                        className={`${
                            theme === "dark"
                                ? "text-[#FFFFFF]/[40%]"
                                : "text-[#1C1C1C]/[40%]"
                        } min-w-[100px] flex-1`}
                    >
                        Quantity
                    </TableHead>
                    <TableHead
                        className={`${
                            theme === "dark"
                                ? "text-[#FFFFFF]/[40%]"
                                : "text-[#1C1C1C]/[40%]"
                        } min-w-[100px] flex-1`}
                    >
                        Amount
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableData.map((data) => (
                    <TableRow
                        key={data.id}
                        className={`border-0 text-[12px] font-[400] ${
                            theme === "dark"
                                ? "hover:bg-[#FFFFFF]/[5%]"
                                : "hover:bg-[#1C1C1C]/[5%]"
                        }`}
                    >
                        <TableCell
                            className={`${
                                theme === "dark"
                                    ? "text-[#FFFFFF]"
                                    : "text-[#1C1C1C]"
                            } min-w-[100px] flex-1`}
                        >
                            {data.name}
                        </TableCell>
                        <TableCell
                            className={`${
                                theme === "dark"
                                    ? "text-[#FFFFFF]"
                                    : "text-[#1C1C1C]"
                            } min-w-[100px] flex-1`}
                        >
                            ${data.price}
                        </TableCell>
                        <TableCell
                            className={`${
                                theme === "dark"
                                    ? "text-[#FFFFFF]"
                                    : "text-[#1C1C1C]"
                            } min-w-[100px] flex-1`}
                        >
                            {data.quantity}
                        </TableCell>
                        <TableCell
                            className={`${
                                theme === "dark"
                                    ? "text-[#FFFFFF]"
                                    : "text-[#1C1C1C]"
                            } min-w-[100px] flex-1`}
                        >
                            $
                            {(
                                parseFloat(data.price) *
                                parseFloat(data.quantity)
                            ).toFixed(2)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
