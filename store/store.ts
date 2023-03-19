import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart.slice";
import { productApi } from "./product/product.api";

export const store = configureStore({
  reducer: { [productApi.reducerPath]: productApi.reducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
