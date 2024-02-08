"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/system/Box";
import Stack from "@mui/joy/Stack";
import EmptyCartText from "./EmptyCartText";
import CartItemList from "./CartItemList";
import Divider from "@mui/joy/Divider";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Cart = () => {
	const cartState = useSelector((state) => state.cart.cart);
	const [totalProducts, setTotalProducts] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let itemCount = 0;
		let priceCount = 0;

		cartState.forEach((product) => {
			itemCount += product.amount;
			priceCount += product.price;
		});

		setTotalProducts(itemCount);
		setTotalPrice(priceCount);
	}, [cartState]);

	return (
		<Box>
			{!cartState.length ? <EmptyCartText /> : <CartItemList cartState={cartState} />}
			<Divider orientation="horizontal" sx={{ mb: 1 }} />
			<Stack direction="row" justifyContent="space-between" sx={{ px: 2 }} alignItems="end">
				<Typography level="body-md" fontWeight="sm">
					Cantidad de productos: <Typography fontWeight="md">{totalProducts}</Typography>
				</Typography>
				<Typography level="h4" fontWeight="md">
					TOTAL:{" "}
					<Typography level="title-lg" fontWeight="sm">
						${totalPrice}
					</Typography>
				</Typography>
			</Stack>
			<Divider orientation="horizontal" sx={{ mt: 1, mb: 1 }} />
		</Box>
	);
};
export default Cart;
