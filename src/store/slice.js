import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addItem: (state, action) => {
      state.cart = [...state.cart, action.payload]
    }
  }
})

export const { addItem } = Slice.actions;