"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/system/Box";
import Stack from "@mui/joy/Stack";
import EmptyCartText from "./EmptyCartText";
import CartItemList from "./CartItemList";
import Divider from "@mui/joy/Divider";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "@mui/joy/Button";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Cart = () => {
	const router = useRouter();

	const cartState = useSelector((state) => state.cart.cart);
	const [totalProducts, setTotalProducts] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const redirectToWsp = () => {
		let totalPrice = 0;
		let wspQuery = `%2AMI+PEDIDO+DE+NATURA%3A%2A%0A———————————%0A`;

		cartState.forEach((product) => {
			totalPrice += product.price * product.amount;
			wspQuery = wspQuery + `${product.name}%0A`;
			wspQuery = wspQuery + `${product.variant ? `_${product.variant}_%0A` : ""}`;
			wspQuery =
				wspQuery +
				`${product.amount ? `%2A${product.amount}%2A+${product.amount === 1 ? "unidad" : "unidades"}%0A` : ""}`;
			wspQuery = wspQuery + `${product.price === 0 ? 'Consulta de precio' : `$${product.price * product.amount}`}%0A———————————%0A`;
		});

		wspQuery = wspQuery + `%2ATOTAL%3A $${totalPrice}%2A`;

		router.push(`https://wa.me/3513924836/?text=${wspQuery}`);

		//%20 es un space
		//%0D es un enter MAL
		//%2A es un *
		//%3A es un :
		//%0A es un line break
	};

	useEffect(() => {
		let itemCount = 0;
		let priceCount = 0;

		cartState.forEach((product) => {
			itemCount += product.amount;
			priceCount += product.price * product.amount;
		});

		setTotalProducts(itemCount);
		setTotalPrice(priceCount);
	}, [cartState]);

	return (
		<Box sx={{ width: "100%" }}>
			{!cartState.length ? (
				<EmptyCartText />
			) : (
				<Box>
					<CartItemList cartState={cartState} />
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
					<Box sx={{ p: 2 }}>
						<Button sx={{ width: "100%" }} startDecorator={<WhatsAppIcon />} color="success" onClick={redirectToWsp}>
							Enviar pedido por WhatsApp
						</Button>
					</Box>
				</Box>
			)}
		</Box>
	);
};
export default Cart;
