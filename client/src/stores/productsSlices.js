import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    boughtProducts: [],
    likedProducts: []
}


export const productsSlices = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addBoughtProducts: (state, action) => {
            state.boughtProducts = [...state.boughtProducts, ...action.payload]
        },
        addLikedProducts: (state, action) => {
            state.likedProducts = [...state.likedProducts, action.payload];
        },
        removeFromLikedProducts: (state, action) => {
            state.likedProducts = state.likedProducts.filter(product => product.id !== action.payload.id)
        }
    }
});

export default productsSlices.reducer;
export const {setProducts, addBoughtProducts, addLikedProducts, removeFromLikedProducts } = productsSlices.actions;