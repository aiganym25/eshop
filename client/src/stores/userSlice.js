import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  authUsername: "",
  email: "",
};

export const authUsernameSlice = createSlice({
  name: "authUsername",
  initialState,
  reducers: {
    setAuthUserName: (state, action) => {
      state.authUsername = action.payload;
    },
    setAuthEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export default authUsernameSlice.reducer;
export const { setAuthUserName, setAuthEmail } = authUsernameSlice.actions;
