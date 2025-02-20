import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";


const appStore = configureStore(
    {
        reducer: {
            user: userReducer, // here userReducer is userSlice.reducer from userSlice.js
        }
    }
);

export default appStore;