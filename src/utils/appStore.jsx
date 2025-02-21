import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";   // this is userSlice.reducer from userSlice.js
import moviesReducer from './moviesSlice';  // this is moviesSlice.reducer from moviesSlice.js

const appStore = configureStore(
    {
        reducer: {
            user: userReducer, // here userReducer is userSlice.reducer from userSlice.js
            movies: moviesReducer,
        }
    }
);

export default appStore;