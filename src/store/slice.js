import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: 'cart',
  initialState: {
    cart: [
      {
        name: 'Crema nutritiva',
        image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw5d10df90/NATARG-74900_1.jpg',
        variant: 'frutas rojas',
        amount: 2,
        price: 7000
      },
      {
        name: 'Kaiak aero eau de toilette femenino',
        image: 'https://tuseduccion.com.ar/14637-home_default/kaiak-aero-femenino-edt-100ml-natura.jpg',
        variant: 'cítrico floral',
        amount: 1,
        price: 0
      },
      {
        name: 'Kaiak aventura eau de toilette femenino',
        image: 'https://fraguru.com/mdimg/perfume/375x500.43623.jpg',
        variant: 'floral acuático',
        amount: 1,
        price: 0
      }
    ]
  },
  reducers: {
    addItem: (state, action) => {
      state.cart = [...state.cart, action.payload]
    }
  }
})

export const { addItem } = Slice.actions;