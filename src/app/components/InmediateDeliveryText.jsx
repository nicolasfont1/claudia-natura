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
			level={isProductList ? "body-xs" : "h4"}
			textColor="neutral"
			sx={{ opacity: 0.6 }}
			startDecorator={<CheckCircleOutlineIcon sx={{ color: "neutral", fontSize: `${isProductList ? "15" : "18"}` }} />}>
			Entrega inmediata
		</Typography>
	);
};

export default InmediateDeliveryText;
