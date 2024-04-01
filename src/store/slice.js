import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addItem: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((product) => {
        return (product.id !== action.payload.id)
      })
    }
  }
})

export const { addItem, deleteItem } = Slice.actions;