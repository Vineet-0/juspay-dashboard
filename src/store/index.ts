import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import layoutReducer from "./layoutSlice";
import activeTabReducer from "./activeTabSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        layout: layoutReducer,
        activeTab: activeTabReducer, // Added activeTab slice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
