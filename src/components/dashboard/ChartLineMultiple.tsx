"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

import { useSelector } from "react-redux";
import { type RootState } from "@/store";

export const description = "A multiple line chart";

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
];

export default function ChartLineMultiple() {
    const theme = useSelector((state: RootState) => state.theme);
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "rgba(168, 197, 218, 1)",
        },
        mobile: {
            label: "Mobile",
            color:
                theme === "dark"
                    ? "rgba(198, 199, 248, 1)"
                    : "rgba(28, 28, 28, 1)",
        },
    } satisfies ChartConfig;
    return (
        <Card className="max-h-full p-0 bg-transparent shadow-none border-0 gap-3">
            <CardHeader className="p-0 bg-transparent">
                <CardTitle
                    className={`${
                        theme === "dark" ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                    } text-[14px] font-[600]`}
                >
                    Revenue
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex w-full  max-h-[215px]">
                <ChartContainer config={chartConfig} className="mx-auto w-full">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <Line
                            dataKey="desktop"
                            type="monotone"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="mobile"
                            type="monotone"
                            stroke="var(--color-mobile)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
