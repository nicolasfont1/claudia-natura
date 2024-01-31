"use client";
import { usePathname } from "next/navigation";
import Typography from "@mui/joy/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const InmediateDeliveryText = () => {
	const path = usePathname();
	let isProductList = path === "/"

	return (
		<Typography
			fontWeight={isProductList ? "xs" : "md"}
			level={isProductList ? "body-xs" : "title-sm"}
			textColor={isProductList ? "#909497" : "neutral.200" }
			startDecorator={<CheckCircleOutlineIcon sx={{ fontSize: `${isProductList ? "15" : "18"}`, color: `${isProductList ? "#909497" : "neutral.200"}` }} />}>
			Entrega inmediata
		</Typography>
	);
};

export default InmediateDeliveryText;
