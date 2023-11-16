import {configureStore} from "@reduxjs/toolkit";
import {productsSlices} from "./productsSlices.js";
import {authUsernameSlice} from "./userSlice.js";
import {basketSlice} from "./backetSlice.js";

const store = configureStore({
    reducer: {
        products: productsSlices.reducer,
        authUsername: authUsernameSlice.reducer,
        basket: basketSlice.reducer,

    }
});

export default store;