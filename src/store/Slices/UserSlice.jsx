import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "users",
    initialState:[],
    reducers:{
        addUser (state, action) {
            state.push(action.payload);
        },
        removeusers (state, action) {
            state.pop(action.payload);
        },
        DeleteUsers (state, action) {},
    },
})
console.log(userSlice.actions);
export default userSlice.reducer;
export const {addUser} = userSlice.actions;
export const {removeusers} = userSlice.actions;