import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// Load initial state from localStorage
const initialState = {
    activeTab: localStorage.getItem("activeTab") ?? "11",
    openedTabs: JSON.parse(localStorage.getItem("openedTabs") ?? "[]"),
    activePath: localStorage.getItem("activePath") ?? "/Dashboard/Default",
};
console.log(JSON.parse(localStorage.getItem("openedTab") ?? "[]"));

const sideBarSlice = createSlice({
    name: "sideBar",
    initialState,
    reducers: {
        setActiveTab: (state, action: PayloadAction<string>) => {
            state.activeTab = action.payload;
            localStorage.setItem("activeTab", action.payload); // Persist to localStorage
        },
        toggleOpenedTab: (state, action: PayloadAction<string>) => {
            const index = state.openedTabs.indexOf(action.payload);
            if (index > -1) {
                // If the tab exists, remove it
                state.openedTabs.splice(index, 1);
            } else {
                // If the tab does not exist, add it
                state.openedTabs.push(action.payload);
            }
            localStorage.setItem(
                "openedTabs",
                JSON.stringify(state.openedTabs)
            ); // Persist to localStorage
        },
        setActivePath: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.activePath = action.payload;
            localStorage.setItem("activePath", action.payload);
        },
    },
});

export const { setActiveTab, toggleOpenedTab, setActivePath } =
    sideBarSlice.actions;
export default sideBarSlice.reducer;
