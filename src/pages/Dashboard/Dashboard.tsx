import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useSelector } from "react-redux";
import { type RootState } from "../../store";
import ECommerceCard from "../../components/ECommerceCard";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
    const theme = useSelector((state: RootState) => state.theme);

    const layout = [
        {
            i: "box1",
            x: 0,
            y: 0,
            w: 1,
            h: 1,
            color: theme === "dark" ? "#E3F5FF" : "#E3F5FF",
            component: (
                <ECommerceCard
                    title={"Customers"}
                    count={"1,000"}
                    growth={"+23%"}
                    textColor={"#1C1C1C"}
                />
            ),
        },
        {
            i: "box2",
            x: 1,
            y: 0,
            w: 1,
            h: 1,
            color: theme === "dark" ? "rgba(255,255,255,0.05)" : "#F7F9FB",
            component: (
                <ECommerceCard
                    title={"Revenue"}
                    count={"1,000"}
                    growth={"-23%"}
                    textColor={theme === "dark" ? "white" : "black"}
                />
            ),
        },
        {
            i: "box3",
            x: 0,
            y: 1,
            w: 1,
            h: 1,
            color: theme === "dark" ? "rgba(255,255,255,0.05)" : "#F7F9FB",
            component: (
                <ECommerceCard
                    title={"Orders"}
                    count={"1,000"}
                    growth={"-23%"}
                    textColor={theme === "dark" ? "white" : "black"}
                />
            ),
        },
        {
            i: "box4",
            x: 1,
            y: 1,
            w: 1,
            h: 1,
            color: theme === "dark" ? "#E5ECF6" : "#E5ECF6",
            component: (
                <ECommerceCard
                    title={"Growth"}
                    count={"1,000"}
                    growth={"+23%"}
                    textColor={"black"}
                />
            ),
        },
        { i: "box5", x: 2, y: 0, w: 2, h: 2 },
        { i: "box6", x: 0, y: 2, w: 3, h: 3 },
        { i: "box7", x: 3, y: 2, w: 1, h: 3 },
        { i: "box8", x: 0, y: 5, w: 3, h: 3 },
        { i: "box9", x: 3, y: 5, w: 1, h: 3 },
    ];

    return (
        <ResponsiveGridLayout
            className={`layout ${
                theme === "dark"
                    ? "bg-[#1C1C1C] text-white"
                    : "bg-white text-black"
            }`}
            layouts={{ lg: layout }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 4, md: 4, sm: 4, xs: 2, xxs: 1 }}
            rowHeight={120}
            isResizable={false}
            isDraggable={true}
            margin={[28, 28]}
        >
            {layout.map((item) => (
                <div
                    key={item.i}
                    className={`${
                        theme === "dark" ? "bg-[#FFFFFF]/[5%]" : "bg-[#F7F9FB]"
                    } rounded-[16px] border-0 shadow-md overflow-hidden`}
                    style={{ background: item?.color }}
                >
                    <div className="w-full h-full p-[24px]">
                        {item?.component}
                    </div>
                </div>
            ))}
        </ResponsiveGridLayout>
    );
};

export default Dashboard;
