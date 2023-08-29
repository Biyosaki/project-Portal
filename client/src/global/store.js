import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./mode"

const store = configureStore({
    reducer: {
        mode: userSlice
    }
});

export default store;