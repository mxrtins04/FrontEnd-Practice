import {configureStore} from "@reduxjs/toolkit";
import {productApi} from "../API/ProductApi";

export const store = configureStore({
    reduccer:{
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefautMiddleware) => 
        getDefautMiddleware().concat(productApi.middleware)
})