import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../product/product.type";

type Props = {
  list: IProduct[]
}

const initialState: Props = {
  list: []};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      state.list.push(action.payload);
    },

    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.list.splice(state.list.findIndex((item) => item.id === action.payload.id), 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
