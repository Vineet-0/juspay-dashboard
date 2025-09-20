import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import layoutReducer from "./layoutSlice";
import sideBarReducer from "./sidebarSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        layout: layoutReducer,
        sideBar: sideBarReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
