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
import { MoreHorizontal } from "lucide-react";

import andilane from "../../assets/contacts/andilane.png";
import drewcano from "../../assets/contacts/drewcano.png";
import katemorrison from "../../assets/contacts/katemorrison.png";
import natalicraig from "../../assets/contacts/natalicraig.png";
import orlandodiggs from "../../assets/contacts/orlandodiggs.png";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    PiArrowsDownUp,
    PiCalendarBlank,
    PiCircleFill,
    PiClipboardText,
    PiFunnelSimple,
    PiMagnifyingGlass,
    PiPlus,
} from "react-icons/pi";
import { useSelector } from "react-redux";
import { type RootState } from "../../store";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "../ui/pagination";

const data: OrderList[] = [
    {
        id: "m5gr84i9",
        orderId: "CM9801",
        name: "Natali Craig",
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        date: "Just now",
        status: "In Process",
    },
    {
        id: "3u1reuv4",
        orderId: "CM9802",
        name: "Kate Morrison",
        project: "CRM Admin pages",
        address: "Larry San Francisco",
        date: "A minute ago",
        status: "Complete",
    },
    {
        id: "derv1ws0",
        orderId: "CM9803",
        name: "Drew Cano",
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        date: "1 hour ago",
        status: "Pending",
    },
    {
        id: "5kma53ae",
        orderId: "CM9804",
        name: "Orlando Diggs",
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        date: "Yesterday",
        status: "Approved",
    },
    {
        id: "bhqecj4p",
        orderId: "CM9805",
        name: "Andi Lane",
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        date: "Feb 2, 2023",
        status: "Rejected",
    },
    {
        id: "m5gr84i9",
        orderId: "CM9806",
        name: "Hello",
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        date: "Just now",

        status: "In Process",
    },
    {
        id: "3u1reuv4",
        orderId: "CM9807",
        name: "Kate Morrison",
        project: "CRM Admin pages",
        address: "Larry San Francisco",
        date: "A minute ago",
        status: "Complete",
    },
    {
        id: "derv1ws0",
        orderId: "CM9808",
        name: "Drew Cano",
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        date: "1 hour ago",
        status: "Pending",
    },
    {
        id: "5kma53ae",
        orderId: "CM9809",
        name: "Orlando Diggs",
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        date: "Yesterday",
        status: "Approved",
    },
    {
        id: "bhqecj4p",
        orderId: "CM9810",
        name: "Andi Lane",
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        date: "Feb 2, 2023",
        status: "Rejected",
    },
    {
        id: "m5gr84i9",
        orderId: "CM9811",
        name: "Natali Craig",
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        date: "Just now",
        status: "In Process",
    },
    {
        id: "3u1reuv4",
        orderId: "CM9812",
        name: "Kate Morrison",
        project: "CRM Admin pages",
        address: "Larry San Francisco",
        date: "A minute ago",
        status: "Complete",
    },
    {
        id: "derv1ws0",
        orderId: "CM9813",
        name: "Drew Cano",
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        date: "1 hour ago",
        status: "Pending",
    },
    {
        id: "5kma53ae",
        orderId: "CM9814",
        name: "Orlando Diggs",
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        date: "Yesterday",
        status: "Approved",
    },
    {
        id: "bhqecj4p",
        orderId: "CM9815",
        name: "Andi Lane",
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        date: "Feb 2, 2023",
        status: "Rejected",
    },
    {
        id: "m5gr84i9",
        orderId: "CM9816",
        name: "Natali Craig",
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        date: "Just now",
        status: "In Process",
    },
    {
        id: "3u1reuv4",
        orderId: "CM9817",
        name: "Kate Morrison",
        project: "CRM Admin pages",
        address: "Larry San Francisco",
        date: "A minute ago",
        status: "Complete",
    },
    {
        id: "derv1ws0",
        orderId: "CM9818",
        name: "Drew Cano",
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        date: "1 hour ago",
        status: "Pending",
    },
    {
        id: "5kma53ae",
        orderId: "CM9819",
        name: "Orlando Diggs",
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        date: "Yesterday",
        status: "Approved",
    },
    {
        id: "bhqecj4p",
        orderId: "CM9820",
        name: "Andi Lane",
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        date: "Feb 2, 2023",
        status: "Rejected",
    },
    {
        id: "m5gr84i9",
        orderId: "CM9821",
        name: "Natali Craig",
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        date: "Just now",
        status: "In Process",
    },
    {
        id: "3u1reuv4",
        orderId: "CM9822",
        name: "Kate Morrison",
        project: "CRM Admin pages",
        address: "Larry San Francisco",
        date: "A minute ago",
        status: "Complete",
    },
    {
        id: "derv1ws0",
        orderId: "CM9823",
        name: "Drew Cano",
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        date: "1 hour ago",
        status: "Pending",
    },
    {
        id: "5kma53ae",
        orderId: "CM9824",
        name: "Orlando Diggs",
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        date: "Yesterday",
        status: "Approved",
    },
    {
        id: "bhqecj4p",
        orderId: "CM9825",
        name: "Andi Lane",
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        date: "Feb 2, 2023",
        status: "Rejected",
    },
    {
        id: "m5gr84i9",
        orderId: "CM9826",
        name: "Natali Craig",
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        date: "Just now",
        status: "In Process",
    },
    {
        id: "3u1reuv4",
        orderId: "CM9827",
        name: "Kate Morrison",
        project: "CRM Admin pages",
        address: "Larry San Francisco",
        date: "A minute ago",
        status: "Complete",
    },
    {
        id: "derv1ws0",
        orderId: "CM9828",
        name: "Drew Cano",
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        date: "1 hour ago",
        status: "Pending",
    },
    {
        id: "5kma53ae",
        orderId: "CM9829",
        name: "Orlando Diggs",
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        date: "Yesterday",
        status: "Approved",
    },
    {
        id: "bhqecj4p",
        orderId: "CM9830",
        name: "Andi Lane",
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        date: "Feb 2, 2023",
        status: "Rejected",
    },
    {
        id: "m5gr84i9",
        orderId: "CM9832",
        name: "Natali Craig",
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        date: "Just now",
        status: "In Process",
    },
    {
        id: "3u1reuv4",
        orderId: "CM9832",
        name: "Kate Morrison",
        project: "CRM Admin pages",
        address: "Larry San Francisco",
        date: "A minute ago",
        status: "Complete",
    },
    {
        id: "derv1ws0",
        orderId: "CM9833",
        name: "Drew Cano",
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        date: "1 hour ago",
        status: "Pending",
    },
    {
        id: "5kma53ae",
        orderId: "CM9834",
        name: "Orlando Diggs",
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        date: "Yesterday",
        status: "Approved",
    },
    {
        id: "bhqecj4p",
        orderId: "CM9835",
        name: "Andi Lane",
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        date: "Feb 2, 2023",
        status: "Rejected",
    },
];

export type OrderList = {
    id: string;
    orderId: string;
    name: string;
    project: string;
    address: string;
    date: string;
    status: "In Process" | "Complete" | "Pending" | "Approved" | "Rejected";
};

export const CommonHeader = ({
    column,
    title,
}: {
    column: any;
    title: string;
}) => {
    const theme = useSelector((state: RootState) => state.theme);
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className="flex items-center gap-[10px] relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`${
                    theme === "dark"
                        ? "text-[#FFFFFF]/[40%]"
                        : "text-[#1C1C1C]/[40%]"
                } `}
            >
                {title}
            </div>
            {isHovered && (
                <button
                    className={`w-[24px] h-[24px] p-[4px] gap-[4px] rounded-[8px] ${
                        theme === "dark"
                            ? "text-[#FFFFFF] hover:bg-[#FFFFFF]/[10%]"
                            : "text-[#1C1C1C] hover:bg-[#1C1C1C]/[5%]"
                    }`}
                    title="Sort"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    <PiArrowsDownUp size={16} />
                </button>
            )}
        </div>
    );
};

export function OrderListTable() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const theme = useSelector((state: RootState) => state.theme);
    const [currentHoverOn, setCurrentHoverOn] = React.useState<string | null>(
        null
    );
    const columns: ColumnDef<OrderList>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) =>
                        table.toggleAllPageRowsSelected(!!value)
                    }
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    className={` ${
                        row.getValue("orderId") === currentHoverOn ||
                        row.getIsSelected()
                            ? "block"
                            : "hidden"
                    } `}
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "orderId",
            header: ({ column }) => (
                <CommonHeader column={column} title="Order ID" />
            ),

            cell: ({ row }) => (
                <div className="capitalize min-w-[90px]">
                    #{row.getValue("orderId")}
                </div>
            ),
        },
        {
            accessorKey: "name",
            header: ({ column }) => (
                <CommonHeader column={column} title="User" />
            ),
            cell: ({ row }) => (
                <div className="capitalize flex items-center gap-[4px]">
                    <div className={`rounded-[8px] p-[4px]`}>
                        <img
                            src={(() => {
                                const orderId = row.getValue(
                                    "orderId"
                                ) as string;
                                const lastChar = orderId.slice(-1); // Get the last character of the orderId
                                const index = parseInt(lastChar, 10) % 5; // Get the index by taking the last char and % 5

                                const images = [
                                    andilane,
                                    natalicraig,
                                    katemorrison,
                                    drewcano,
                                    orlandodiggs,
                                ];

                                return images[index]; // Return the corresponding image
                            })()}
                            alt={row.getValue("name")}
                            className="w-[24px] h-[24px] rounded-[80px]"
                        />
                    </div>
                    {row.getValue("name")}
                </div>
            ),
        },
        {
            accessorKey: "project",
            header: ({ column }) => (
                <CommonHeader column={column} title="Project" />
            ),
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("project")}</div>
            ),
        },
        {
            accessorKey: "address",
            header: ({ column }) => (
                <CommonHeader column={column} title="Address" />
            ),
            cell: ({ row }) => (
                <div className="capitalize flex items-center gap-[4px] relative w-fit">
                    {row.getValue("address")}{" "}
                    <PiClipboardText
                        size={16}
                        className={` absolute right-[-20px] ${
                            row.getValue("orderId") === currentHoverOn
                                ? "block"
                                : "hidden"
                        } `}
                        onClick={() =>
                            navigator.clipboard.writeText(
                                row.getValue("address")
                            )
                        }
                    />
                </div>
            ),
        },
        {
            accessorKey: "date",
            header: ({ column }) => (
                <CommonHeader column={column} title="Date" />
            ),
            cell: ({ row }) => (
                <div className="capitalize flex items-center gap-[4px]">
                    <PiCalendarBlank size={16} />
                    {row.getValue("date")}
                </div>
            ),
        },
        {
            accessorKey: "status",
            header: ({ column }) => (
                <CommonHeader column={column} title="Status" />
            ),
            cell: ({ row }) => {
                const theme = useSelector((state: RootState) => state.theme);
                const StatusColor: Record<OrderList["status"], string> = {
                    "In Process": "text-[#8A8CD9]",
                    Complete: "text-[#4AA785]",
                    Pending: "text-[#59A8D4]",
                    Approved: "text-[#FFC555]",
                    Rejected:
                        theme === "dark"
                            ? "text-[#FFFFFF]/[40%]"
                            : "text-[#1C1C1C]/[40%]",
                };
                const newStatus = row.getValue("status") as OrderList["status"];
                return (
                    <div
                        className={`${StatusColor[newStatus]} capitalize flex items-center gap-[5px]`}
                    >
                        <PiCircleFill size={10} />
                        {String(newStatus)}
                    </div>
                );
            },
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const orderList = row.original;

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className={`h-8 w-[48px] p-0 ${
                                    theme === "dark"
                                        ? " hover:bg-[#FFFFFF]/[10%] hover:text-white"
                                        : " hover:bg-[#1C1C1C]/[5%]"
                                }`}
                            >
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() =>
                                    navigator.clipboard.writeText(orderList.id)
                                }
                            >
                                Copy orderList ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>
                                View orderList details
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
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
        <div className="w-full h-[92%] px-[24px] py-[10px] flex flex-col gap-[12px]">
            <div
                className={`flex items-center justify-between p-[8px] rounded-[8px]  ${
                    theme === "dark" ? "bg-[#FFFFFF]/[5%]" : "bg-[#1C1C1C]/[5%]"
                }`}
            >
                <div className="rounded-[8px] flex items-center gap-[8px]">
                    <button
                        className={`w-[28px] h-[28px] p-[4px] gap-[4px] rounded-[8px] ${
                            theme === "dark"
                                ? "hover:bg-[#FFFFFF]/[10%]"
                                : "hover:bg-[#1C1C1C]/[5%]"
                        }`}
                        title="Add"
                    >
                        <PiPlus size={20} />
                    </button>
                    <button
                        className={`w-[28px] h-[28px] p-[4px] gap-[4px] rounded-[8px] ${
                            theme === "dark"
                                ? "hover:bg-[#FFFFFF]/[10%]"
                                : "hover:bg-[#1C1C1C]/[5%]"
                        }`}
                        title="Filter"
                    >
                        <PiFunnelSimple size={20} />
                    </button>
                    <button
                        className={`w-[28px] h-[28px] p-[4px] gap-[4px] rounded-[8px] ${
                            theme === "dark"
                                ? "hover:bg-[#FFFFFF]/[10%]"
                                : "hover:bg-[#1C1C1C]/[5%]"
                        }`}
                        title="Sort"
                    >
                        <PiArrowsDownUp size={20} />
                    </button>
                    {table.getFilteredSelectedRowModel().rows.length ? (
                        <>
                            <div
                                className={`${
                                    theme === "dark"
                                        ? "border-[#FFFFFF]/[40%]"
                                        : "border-[#1C1C1C]/[40%]"
                                } w-[0px] h-[20px] mx-4  border-r-[1px] rounded-[80px]`}
                            />

                            <div
                                className={`flex items-center text-[14px] font-[400]  px-[8px] py-[4px] gap-[4px] rounded-[8px] ${
                                    theme === "dark"
                                        ? "hover:bg-[#FFFFFF]/[10%] text-[#ffffff]/[80%]"
                                        : "hover:bg-[#1C1C1C]/[5%] text-[#1C1C1C]/[80%]"
                                }`}
                            >
                                {
                                    table.getFilteredSelectedRowModel().rows
                                        .length
                                }{" "}
                                Selected
                            </div>
                            <button
                                className={`flex items-center text-[14px] font-[400] px-[8px] py-[4px] gap-[4px] rounded-[8px] ${
                                    theme === "dark"
                                        ? "bg-[#FFFFFF]/[10%] hover:bg-[#FFFFFF]/[20%]"
                                        : "bg-[#1C1C1C]/[10%] hover:bg-[#1C1C1C]/[20%]"
                                }`}
                                title="Sort"
                            >
                                Delete Selected
                            </button>
                        </>
                    ) : null}
                </div>
                <div
                    className={`transition-all duration-600 w-[200px] ${
                        theme === "dark"
                            ? "bg-[#1c1c1c]/[40%] border-[#ffffff]/[10%] text-white"
                            : "bg-[#ffffff]/[40%] border-[#1c1c1c]/[10%] text-black"
                    } hover:w-1/2 border-[1px] rounded-lg shadow px-[8px] py-[4px] flex items-center gap-1 `}
                >
                    <PiMagnifyingGlass
                        className={`${
                            theme === "dark"
                                ? "text-[#FFFFFF]/[20%]"
                                : "text-[#1C1C1C]/[20%]"
                        }`}
                        size={16}
                    />
                    <input
                        type="text"
                        placeholder="Search by Project Name"
                        className={`text-[14px] font-[400] ${
                            theme === "dark"
                                ? "text-[#FFFFFF] placeholder-white"
                                : "text-[#1C1C1C] placeholder-black"
                        } bg-transparent outline-none w-full`}
                        value={
                            (table
                                .getColumn("project")
                                ?.getFilterValue() as string) ?? ""
                        }
                        onChange={(event) =>
                            table
                                .getColumn("project")
                                ?.setFilterValue(event.target.value)
                        }
                    />
                </div>
            </div>
            <div>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow
                                key={headerGroup.id}
                                className={`${
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
                                                      header.column.columnDef
                                                          .header,
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
                                    onMouseOver={() =>
                                        setCurrentHoverOn(
                                            row.getValue("orderId")
                                        )
                                    }
                                    onMouseOut={() => setCurrentHoverOn(null)}
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
            </div>
            <div className="flex items-center justify-end px-4">
                {/* <div className="text-muted-foreground flex-1 text-sm">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div> */}
                <Pagination className="justify-end flex-1">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => {
                                    if (table.getCanPreviousPage()) {
                                        table.previousPage();
                                    }
                                }}
                                className={`${
                                    theme === "dark"
                                        ? "hover:bg-[#ffffff]/[10%] text-[#ffffff] hover:text-[#ffffff]"
                                        : "hover:bg-[#1C1C1C]/[5%] text-[#1C1C1C] hover:text-[#1C1C1C]"
                                }`}
                            />
                        </PaginationItem>
                        <div className="flex items-center justify-center space-x-2 py-4">
                            {[...Array(table.getPageCount())].map(
                                (_, index) => {
                                    const pageNumber = index + 1; // Page numbers start from 1
                                    return (
                                        <Button
                                            key={pageNumber}
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                table.setPageIndex(index)
                                            }
                                            className={` border-0 shadow-none ${
                                                table.getState().pagination
                                                    .pageIndex === index
                                                    ? theme === "dark"
                                                        ? "bg-[#ffffff]/[10%] text-white"
                                                        : "bg-[#1C1C1C]/[5%] text-[#1C1C1C]"
                                                    : "bg-transparent"
                                            }`}
                                        >
                                            {pageNumber}
                                        </Button>
                                    );
                                }
                            )}
                        </div>
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={() => {
                                    if (table.getCanNextPage()) {
                                        table.nextPage();
                                    }
                                }}
                                className={`${
                                    theme === "dark"
                                        ? "hover:bg-[#ffffff]/[10%] text-[#ffffff] hover:text-[#ffffff]"
                                        : "hover:bg-[#1C1C1C]/[5%] text-[#1C1C1C] hover:text-[#1C1C1C]"
                                }`}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
