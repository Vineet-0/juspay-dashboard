import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage
const initialState = {
    activeTab: localStorage.getItem("activeTab") || "Dashboard",
};

const activeTabSlice = createSlice({
    name: "activeTab",
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
            localStorage.setItem("activeTab", action.payload); // Persist to localStorage
        },
    },
});

export const { setActiveTab } = activeTabSlice.actions;
export default activeTabSlice.reducer;
