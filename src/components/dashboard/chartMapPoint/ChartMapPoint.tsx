import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
// import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

import LightGlobe from "@/assets/lightGlobe.png";
import DarkGlobe from "@/assets/darkGlobe.png";

import { useSelector } from "react-redux";
import { type RootState } from "@/store";
// import ChartExample from ".";

export const description = "A donut chart";

// const chartData = [
//     { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//     { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//     { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//     { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//     { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ];

// const chartConfig = {
//     visitors: {
//         label: "Visitors",
//     },
//     chrome: {
//         label: "Chrome",
//         color: "var(--chart-1)",
//     },
//     safari: {
//         label: "Safari",
//         color: "var(--chart-2)",
//     },
//     firefox: {
//         label: "Firefox",
//         color: "var(--chart-3)",
//     },
//     edge: {
//         label: "Edge",
//         color: "var(--chart-4)",
//     },
//     other: {
//         label: "Other",
//         color: "var(--chart-5)",
//     },
// } satisfies ChartConfig;

const mapData = [
    {
        id: 1,
        name: "New York",
        revenue: "72K",
    },
    {
        id: 2,
        name: "San Francisco",
        revenue: "39K",
    },
    {
        id: 3,
        name: "Sydney",
        revenue: "25K",
    },
    {
        id: 4,
        name: "Singapore",
        revenue: "61K",
    },
];

export default function ChartMapPoint() {
    const theme = useSelector((state: RootState) => state.theme);
    return (
        <Card className="max-h-full p-0 bg-transparent shadow-none border-0 gap-3">
            <CardHeader className="p-0 bg-transparent">
                <CardTitle
                    className={`dark:text-[#FFFFFF] text-[#1C1C1C] text-[14px] font-[600]`}
                >
                    Revenue by Location
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-[-10px] flex w-full  max-h-[345px]">
                <img
                    src={theme === "dark" ? DarkGlobe : LightGlobe}
                    alt="globe images"
                />
                {/* <ChartContainer config={chartConfig} className="mx-auto w-full">
                    <ChartExample />
                </ChartContainer> */}
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm p-0">
                {mapData.map((item, index) => {
                    const width = `w-[${item?.revenue?.split("K")?.[0]}%]`;
                    console.log(width);
                    return (
                        <div
                            key={index}
                            className="w-full flex flex-col gap-[2px]"
                        >
                            <div
                                className={`dark:text-[#FFFFFF] text-[#1C1C1C] w-full flex items-center justify-between text-[12px] font-[400]`}
                            >
                                <div>{item?.name}</div>
                                <div>{item?.revenue}</div>
                            </div>
                            <div className="w-full relative">
                                <div
                                    className={`w-full border-2 dark:border-[#FFFFFF]/[40%] border-[#A8C5DA]/[40%]" rounded-[80px]`}
                                ></div>
                                <div
                                    className={`absolute top-0 w-1/2 border-2 border-[#A8C5DA] rounded-[80px]`}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </CardFooter>
        </Card>
    );
}
