"use client";

// import { Pie, PieChart } from "recharts";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
// import {
//     type ChartConfig,
//     ChartContainer,
//     ChartTooltip,
//     ChartTooltipContent,
// } from "@/components/ui/chart";

import { useSelector } from "react-redux";
import { type RootState } from "@/store";
import { PiCircleFill } from "react-icons/pi";

import PieChart from "@/assets/pieChart.png";

export const description = "A donut chart";

// const chartData = [
//     { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//     { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//     { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//     { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//     { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ];

export default function ChartPieDonut() {
    const theme = useSelector((state: RootState) => state.theme);
    const pieChartData = [
        {
            id: 1,
            label: "Direct",
            sale: "$123",
            color:
                theme === "dark"
                    ? "rgba(198, 199, 248, 1)"
                    : "rgba(28, 28, 28, 1)",
        },
        {
            id: 2,
            label: "Affilliate",
            sale: "$123",
            color: "rgba(186, 237, 189, 1)",
        },
        {
            id: 3,
            label: "Sponsored",
            sale: "$123",
            color: "rgba(149, 164, 252, 1)",
        },
        {
            id: 4,
            label: "E-mail",
            sale: "$123",
            color: "rgba(177, 227, 255, 1)",
        },
    ];
    // const chartConfig = {
    //     direct: {
    //         label: "Direct",
    //         color:
    //             theme === "dark"
    //                 ? "rgba(198, 199, 248, 1)"
    //                 : "rgba(28, 28, 28, 1)",
    //     },
    //     affilliate: {
    //         label: "Affilliate",
    //         color: "rgba(186, 237, 189, 1)",
    //     },
    //     sponsored: {
    //         label: "Sponsored",
    //         color: "rgba(149, 164, 252, 1)",
    //     },
    //     email: {
    //         label: "E-mail",
    //         color: "rgba(177, 227, 255, 1)",
    //     },
    // } satisfies ChartConfig;
    return (
        <Card className="max-h-full p-0 bg-transparent shadow-none border-0 gap-3">
            <CardHeader className="p-0 bg-transparent">
                <CardTitle
                    className={`dark:text-[#FFFFFF] text-[#1C1C1C] text-[14px] font-[600]`}
                >
                    Total Sales
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 px-0 mt-[-12px] mb-[-5px]">
                {/* <ChartContainer
                    config={chartConfig}
                    className="w-full w-[300px] h-[300p]"
                > */}
                <img
                    src={PieChart}
                    alt={"pie chart image"}
                    className="w-[120px] h-[120px] mx-auto p-2"
                />
                {/* <ChartContainer
                    config={chartConfig}
                    className=" aspect-square max-h-[120px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={60}
                        />
                    </PieChart>
                </ChartContainer> */}
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm p-0">
                {pieChartData.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`dark:text-[#FFFFFF] text-[#1C1C1C] w-full flex items-center justify-between text-[12px] font-[400]`}
                        >
                            <div className="flex flex-1 items-center gap-[4px]">
                                <PiCircleFill
                                    style={{ color: item.color }}
                                    size={8}
                                />
                                {item?.label}
                            </div>
                            <div className="w-1/4">{item?.sale}</div>
                        </div>
                    );
                })}
            </CardFooter>
        </Card>
    );
}
