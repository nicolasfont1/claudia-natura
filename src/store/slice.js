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
        return (product.name !== action.payload.name && product.variant !== action.payload.variant)
      })
    }
    //revisar que cuando pongo productos iguales se borran todos
  }
})

export const { addItem, deleteItem } = Slice.actions;