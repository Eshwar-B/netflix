// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//     name: "user",
//     initialState: null,
//     reducers: {
//         addUser: (state, action) => {
//             return action.payload;
//         },
//         removeUser: (state, action) => {
//             return null;
//         },
//         setUser: (state, action) => {
//             state.user = action.payload;
//         },
//         logout: (state) => {
//             state.user = null;
//         }
//     },
// });

// export const { addUser, removeUser, setUser, logout } = userSlice.actions;

// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null, 
    },
    reducers: {
        addUser: (state, action) => {
            state.user = {
                uid: action.payload.uid,
                email: action.payload.email,
                displayName: action.payload.displayName,
                photoURL: action.payload.photoURL, // ✅ Storing user photo
            };
        },
        setUser: (state, action) => {
            if (state.user) {
                state.user = {
                    ...state.user,  // Keep existing user data
                    email: action.payload.email,
                    displayName: action.payload.displayName,
                    photoURL: action.payload.photoURL,
                };
            }
        },
        removeUser: (state) => {
            state.user = null;
        },
    },
});

export const { addUser, setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
