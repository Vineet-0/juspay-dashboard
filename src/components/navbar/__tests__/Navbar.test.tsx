import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Navbar from "../Navbar";
import themeReducer, { type Theme } from "../../../store/themeSlice";
import layoutReducer from "../../../store/layoutSlice";
import sidebarReducer from "../../../store/sidebarSlice";

// Mock child components
jest.mock("../SearchBar", () => {
    return function MockSearchBar() {
        return <div data-testid="search-bar">SearchBar</div>;
    };
});

jest.mock("../BreadCrumb", () => {
    return function MockBreadCrumb() {
        return <div data-testid="breadcrumb">BreadCrumb</div>;
    };
});

const createMockStore = (theme: Theme = "light") => {
    return configureStore({
        reducer: {
            theme: themeReducer,
            layout: layoutReducer,
            sideBar: sidebarReducer,
        },
        preloadedState: {
            theme,
            layout: { sidebarOpen: true, rightbarOpen: true },
            sideBar: {
                activeTab: "11",
                openedTabs: [],
                activePath: "/Dashboard/Default",
            },
        },
    });
};

const renderWithProvider = (theme: Theme = "light") => {
    const store = createMockStore(theme);
    return {
        store,
        ...render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        ),
    };
};

describe("Navbar", () => {
    it("should render all navbar elements", () => {
        renderWithProvider();

        expect(screen.getByTestId("search-bar")).toBeInTheDocument();
        expect(screen.getByTestId("breadcrumb")).toBeInTheDocument();
        expect(screen.getByTitle("Toggle Sidebar")).toBeInTheDocument();
        expect(screen.getByTitle("Toggle Theme")).toBeInTheDocument();
        expect(screen.getByTitle("Toggle Rightbar")).toBeInTheDocument();
    });

    it("should toggle sidebar when sidebar button is clicked", () => {
        const { store } = renderWithProvider();

        const sidebarButton = screen.getByTitle("Toggle Sidebar");
        fireEvent.click(sidebarButton);

        expect(store.getState().layout.sidebarOpen).toBe(false);
    });

    it("should toggle rightbar when rightbar button is clicked", () => {
        const { store } = renderWithProvider();

        const rightbarButton = screen.getByTitle("Toggle Rightbar");
        fireEvent.click(rightbarButton);

        expect(store.getState().layout.rightbarOpen).toBe(false);
    });

    it("should toggle theme when theme button is clicked", () => {
        const { store } = renderWithProvider("light");

        const themeButton = screen.getByTitle("Toggle Theme");
        fireEvent.click(themeButton);

        expect(store.getState().theme).toBe("dark");
    });

    it("should show sun icon in light theme", () => {
        renderWithProvider("light");

        const themeButton = screen.getByTitle("Toggle Theme");
        expect(themeButton).toBeInTheDocument();
    });

    it("should show moon icon in dark theme", () => {
        renderWithProvider("dark");

        const themeButton = screen.getByTitle("Toggle Theme");
        expect(themeButton).toBeInTheDocument();
    });

    it("should render all action buttons", () => {
        renderWithProvider();

        expect(screen.getByTitle("Star")).toBeInTheDocument();
        expect(screen.getByTitle("History")).toBeInTheDocument();
        expect(screen.getByTitle("Notifications")).toBeInTheDocument();
    });
});
