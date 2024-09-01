import { createSlice } from "@reduxjs/toolkit";

//create initial state
const initialState = {
  users: localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [],
};

//create slice
export const userSlice = createSlice({
  name: "users",
  initialState,
  //reducers is an object that contains all of our reducers
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(
        (user, index) => index !== action.payload
      );
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
