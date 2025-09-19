import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
    sidebarOpen: JSON.parse(localStorage.getItem("sidebarOpen") || "true"),
    rightbarOpen: JSON.parse(localStorage.getItem("rightbarOpen") || "true"),
};

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
            localStorage.setItem(
                "sidebarOpen",
                JSON.stringify(state.sidebarOpen)
            );
        },
        toggleRightbar: (state) => {
            state.rightbarOpen = !state.rightbarOpen;
            localStorage.setItem(
                "rightbarOpen",
                JSON.stringify(state.rightbarOpen)
            );
        },
    },
});

export const { toggleSidebar, toggleRightbar } = layoutSlice.actions;
export default layoutSlice.reducer;
