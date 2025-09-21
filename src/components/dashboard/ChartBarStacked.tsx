import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "rgba(168, 197, 218, 1)",
    },
    mobile: {
        label: "Mobile",
        color: "rgba(168, 197, 218, 0.5)",
    },
} satisfies ChartConfig;

export default function ChartBarStacked() {
    return (
        <Card className="max-h-full p-0 bg-transparent shadow-none border-0 gap-3">
            <CardHeader className="p-0 bg-transparent">
                <CardTitle
                    className={`darkdark:text-[#FFFFFF] dark:text-[#1C1C1C]  text-[14px] font-[600]`}
                >
                    Projection v/s Actuals
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex w-full  max-h-[220px]">
                <ChartContainer config={chartConfig} className="mx-auto w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickCount={5}
                            width={30}
                        />
                        <ChartTooltip
                            content={<ChartTooltipContent hideLabel />}
                        />
                        {/* <ChartLegend content={<ChartLegendContent />} /> */}
                        <Bar
                            dataKey="desktop"
                            stackId="a"
                            fill="var(--color-desktop)"
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey="mobile"
                            stackId="a"
                            fill="var(--color-mobile)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
        </Card>
    );
}
