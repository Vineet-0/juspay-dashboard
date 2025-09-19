import { useSelector } from "react-redux";
import { type RootState } from "./store";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Dashboard from "./pages/Dashboard/Dashboard";

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
                    className={`p-4 flex-1 overflow-y-auto ${
                        theme === "dark"
                            ? "scrollbar-custom-dark"
                            : "scrollbar-custom-light"
                    }`}
                >
                    <Dashboard />
                </div>
            </div>
            {rightbarOpen && <Rightbar />}
        </div>
    );
};

export default App;
