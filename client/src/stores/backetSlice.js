import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    basketTotal: 0
}

export const basketSlice = createSlice({
    name: "basketSlice",
    initialState,
    reducers: {
        addBasket: (state, action) => {
            state.basket = [...state.basket, action.payload];
        },
        getBasketTotal: (state, action) => {
            state.basketTotal = action.payload.reduce((amount, item) => item.price + amount, 0);
        },
        reduceBasket: (state, action) => {
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.payload
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`
          can't remove product whose id is ${index}
          `);
            }

            return {
                ...state,
                basket: newBasket,
            };
        }

    }
});

export default basketSlice.reducer;
export const {addBasket, getBasketTotal, reduceBasket } = basketSlice.actions;
