import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderList from "./pages/OrderList/OrderList";

const App = () => {
    return (
        <Router>
            <div
                className={`flex dark:bg-[#1C1C1C] dark:text-white bg-[#FFFFFF] text-black w-full h-full max-h-screen overflow-auto`}
            >
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <div
                        className={`flex-1 overflow-y-auto dark:scrollbar-custom-dark scrollbar-custom-light`}
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
                            <Route path="*" element={<Dashboard />} />
                        </Routes>
                    </div>
                </div>
                <Rightbar />
            </div>
        </Router>
    );
};

export default App;
