"use client";
import Box from "@mui/system/Box";

import { useSelector } from "react-redux";

const Cart = () => {
  const cartState = useSelector(state => state.cart.cart) 

  return (
    <Box>
      <b>Acá esta el carro</b>
      <p>{cartState}</p>
    </Box>
  )
};
export default Cart;