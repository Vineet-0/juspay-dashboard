import { useSelector } from "react-redux";
import { type RootState } from "./store";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderList from "./pages/OrderList/OrderList";

const App = () => {
    const theme = useSelector((state: RootState) => state.theme);
    const { sidebarOpen, rightbarOpen } = useSelector(
        (state: RootState) => state.layout
    );

    return (
        <Router>
            <div
                className={`flex ${
                    theme === "dark"
                        ? "bg-[#1C1C1C] text-white"
                        : "bg-[#FFFFFF] text-black"
                } w-full h-full max-h-screen overflow-hidden`}
            >
                {sidebarOpen && <Sidebar />}
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <div
                        className={`flex-1 overflow-y-auto ${
                            theme === "dark"
                                ? "scrollbar-custom-dark"
                                : "scrollbar-custom-light"
                        }`}
                    >
                        <Routes>
                            {/* Define your routes here */}
                            <Route
                                path="/dashboard/default"
                                element={<Dashboard />}
                            />
                            <Route
                                path="/dashboard/orderlist"
                                element={<OrderList />}
                            />
                            <Route path="*" element={<OrderList />} />
                        </Routes>
                    </div>
                </div>
                {rightbarOpen && <Rightbar />}
            </div>
        </Router>
    );
};

export default App;
