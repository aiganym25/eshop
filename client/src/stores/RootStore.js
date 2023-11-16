import {configureStore} from "@reduxjs/toolkit";
import {productsSlices} from "./productsSlices.js";
import {authUsernameSlice} from "./userSlice.js";
import {basketSlice} from "./backetSlice.js";
import {searchQuerySlice} from "./searchQuerySlice.js";
import {categorySlice} from "./categorySlice.js";

const store = configureStore({
    reducer: {
        products: productsSlices.reducer,
        authUsername: authUsernameSlice.reducer,
        basket: basketSlice.reducer,
        searchQuery: searchQuerySlice.reducer,
        category: categorySlice.reducer

    }
});

export default store;