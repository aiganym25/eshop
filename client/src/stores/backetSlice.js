import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    basket: [],
}

export const basketSlice = createSlice({
    name: "basketSlice",
    initialState,
    reducers: {
        addBasket: (state, action) => {
            state.basket = [...state.basket, action.payload]
        }
    }
});

export default basketSlice.reducer;
export const {setProducts } = basketSlice.actions;
