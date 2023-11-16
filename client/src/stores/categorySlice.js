import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categories: ['All'],
    filterByCategory: "All"
}

export const categorySlice = createSlice({
    name: "basketSlice",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = [...state.categories, action.payload];
        },
        setFilterByCategory: (state, action) => {
            state.filterByCategory = action.payload;
        }


    }
});

export default categorySlice.reducer;
export const {setCategories, setFilterByCategory} = categorySlice.actions;
