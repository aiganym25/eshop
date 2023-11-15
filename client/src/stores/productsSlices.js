import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: []
}


export const productsSlices = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
});

export default productsSlices.reducer;
export const {setProducts } = productsSlices.actions;