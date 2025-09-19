import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useSelector } from "react-redux";
import { type RootState } from "../../store";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
    const theme = useSelector((state: RootState) => state.theme);

    const layout = [
        { i: "box1", x: 0, y: 0, w: 1, h: 1 },
        { i: "box2", x: 0, y: 1, w: 1, h: 1 },
        { i: "box3", x: 1, y: 0, w: 1, h: 1 },
        { i: "box4", x: 1, y: 1, w: 1, h: 1 },
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
            rowHeight={100}
            isResizable={true}
            isDraggable={true}
        >
            {layout.map((item) => (
                <div
                    key={item.i}
                    style={{
                        backgroundColor: `${
                            theme === "dark"
                                ? "rgba(256, 256, 256, 0.05)"
                                : "#f7f9fb"
                        }`,
                    }}
                    className={`rounded-lg border-0 flex items-center justify-center shadow-md`}
                >
                    {item?.i?.toUpperCase()}
                </div>
            ))}
        </ResponsiveGridLayout>
    );
};

export default Dashboard;
