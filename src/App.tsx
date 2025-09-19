import { useSelector } from "react-redux";
import { type RootState } from "./store";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import DashboardCard from "./components/DashboardCard";
import Chart from "./components/Chart";
import Table from "./components/Table";

const App = () => {
    const theme = useSelector((state: RootState) => state.theme);
    const { sidebarOpen, rightbarOpen } = useSelector(
        (state: RootState) => state.layout
    );

    return (
        <div
            className={`flex ${
                theme === "dark"
                    ? "bg-[#1C1C1C] text-white"
                    : "bg-white text-black"
            } w-full h-full max-h-screen overflow-hidden`}
        >
            {sidebarOpen && <Sidebar />}
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div
                    className={`p-4 grid grid-cols-3 gap-4 overflow-y-scroll ${
                        theme === "dark"
                            ? "scrollbar-custom-dark"
                            : "scrollbar-custom-light"
                    }`}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                        <>
                            <DashboardCard
                                title="Customers"
                                value="3,781"
                                growth="+11.01%"
                            />
                            <DashboardCard
                                title="Orders"
                                value="1,219"
                                growth="-0.03%"
                            />
                            <DashboardCard
                                title="Revenue"
                                value="$695"
                                growth="+15.03%"
                            />
                        </>
                    ))}
                    <div className="p-4 flex gap-4">
                        <Chart />
                        <Table />
                    </div>
                </div>
            </div>
            {rightbarOpen && <Rightbar />}
        </div>
    );
};

export default App;
