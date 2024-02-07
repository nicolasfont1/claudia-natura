"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/system/Box";
import Stack from "@mui/joy/Stack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EmptyCartText from "./EmptyCartText";

import { useSelector } from "react-redux";

const Cart = () => {
	const cartState = useSelector((state) => state.cart.cart);

	return <Box>{!cartState.length ? <EmptyCartText /> : <Typography></Typography>}</Box>;
};
export default Cart;
