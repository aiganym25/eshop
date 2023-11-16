import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchQuery: ""
};

export const searchQuerySlice = createSlice({
    name: "authUsername",
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        }
    },
});

export default searchQuerySlice.reducer;
export const { setSearchQuery } = searchQuerySlice.actions;