"use client";

import * as React from "react";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    type ColumnDef,
    type ColumnFiltersState,
    type SortingState,
    type VisibilityState,
} from "@tanstack/react-table";
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

const data: OrderList[] = [
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

export type OrderList = {
    id: string;
    name: string;
    price: string;
    quantity: string;
};

export function ChartTable() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const theme = useSelector((state: RootState) => state.theme);
    const columns: ColumnDef<OrderList>[] = [
        {
            accessorKey: "name",
            header: () => {
                const theme = useSelector((state: RootState) => state.theme);
                return (
                    <div
                        className={`${
                            theme === "dark"
                                ? "text-[#FFFFFF]/[40%]"
                                : "text-[#1C1C1C]/[40%]"
                        }`}
                    >
                        Name
                    </div>
                );
            },
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("name")}</div>
            ),
        },

        {
            accessorKey: "price",
            header: () => {
                const theme = useSelector((state: RootState) => state.theme);
                return (
                    <div
                        className={`${
                            theme === "dark"
                                ? "text-[#FFFFFF]/[40%]"
                                : "text-[#1C1C1C]/[40%]"
                        }`}
                    >
                        Price
                    </div>
                );
            },
            cell: ({ row }) => (
                <div className="capitalize">${row.getValue("price")}</div>
            ),
        },
        {
            accessorKey: "quantity",
            header: () => {
                const theme = useSelector((state: RootState) => state.theme);
                return (
                    <div
                        className={`${
                            theme === "dark"
                                ? "text-[#FFFFFF]/[40%]"
                                : "text-[#1C1C1C]/[40%]"
                        } `}
                    >
                        Quantity
                    </div>
                );
            },
            cell: ({ row }) => (
                <div className="capitalize flex items-center gap-[4px] relative w-fit">
                    {row.getValue("quantity")}
                </div>
            ),
        },
        {
            accessorKey: "amount",
            header: () => {
                const theme = useSelector((state: RootState) => state.theme);
                return (
                    <div
                        className={`${
                            theme === "dark"
                                ? "text-[#FFFFFF]/[40%]"
                                : "text-[#1C1C1C]/[40%]"
                        }`}
                    >
                        Amount
                    </div>
                );
            },
            cell: ({ row }) => (
                <div className="capitalize flex items-center gap-[4px]">
                    $
                    {(
                        parseFloat(row.getValue("price")) *
                        parseFloat(row.getValue("quantity"))
                    ).toFixed(2)}
                </div>
            ),
        },
    ];

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow
                        key={headerGroup.id}
                        className={` ${
                            theme === "dark"
                                ? "border-[#FFFFFF]/[20%] hover:bg-[#FFFFFF]/[5%]"
                                : "border-[#1C1C1C]/[20%] hover:bg-[#F7F9FB]"
                        }`}
                    >
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </TableHead>
                            );
                        })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody className="max-h-[300px] overflow-y-auto">
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow
                            key={row.id}
                            // data-state={
                            //     row.getIsSelected() && "selected"
                            // }
                            className={`h-[44px] ${
                                theme === "dark"
                                    ? "border-[#FFFFFF]/[5%] hover:bg-[#FFFFFF]/[5%]"
                                    : "border-[#1C1C1C]/[5%] hover:bg-[#F7F9FB]"
                            } ${
                                row.getIsSelected() &&
                                "selected" &&
                                (theme === "dark"
                                    ? "bg-[#FFFFFF]/[5%]"
                                    : "bg-[#F7F9FB]")
                            } `}
                        >
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell
                            colSpan={columns.length}
                            className="h-24 text-center"
                        >
                            No results.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
