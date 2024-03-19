"use client";
import { usePathname } from "next/navigation";
import Typography from "@mui/joy/Typography";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const InmediateDeliveryText = () => {
	const path = usePathname();
	let isProductList = path === "/";

	return (
		<Typography
			fontWeight={isProductList ? "xs" : "md"}
			level={isProductList ? "body-xs" : "title-sm"}
			textColor={isProductList ? "#909497" : "neutral.200"}
			sx={{ mr: 1 }}
			startDecorator={
				<LocalShippingIcon
					sx={{ fontSize: `${isProductList ? "15" : "18"}`, color: `${isProductList ? "#909497" : "neutral.200"}` }}
				/>
			}>
			Entrega inmediata
		</Typography>
	);
};

export default InmediateDeliveryText;
