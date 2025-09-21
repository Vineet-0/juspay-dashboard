import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Define theme types
export type Theme = "light" | "dark";

// Get initial theme from localStorage or default to 'light'
const initialTheme: Theme = (localStorage.getItem("theme") as Theme) || "light";

const themeSlice = createSlice({
    name: "theme",
    initialState: initialTheme,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            console.log(state);
            if (action.payload === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            localStorage.setItem("theme", action.payload); // Save to localStorage
            return action.payload; // Update state
        },
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
