"use client";
import { usePathname } from "next/navigation";
import Typography from "@mui/joy/Typography";
import CheckIcon from "@mui/icons-material/Check";

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
				<CheckIcon
					sx={{ fontSize: `${isProductList ? "15" : "18"}`, color: `${isProductList ? "#909497" : "neutral.200"}` }}
				/>
			}>
			Entrega inmediata
		</Typography>
	);
};

export default InmediateDeliveryText;
