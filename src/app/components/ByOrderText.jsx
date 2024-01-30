"use client";
import { usePathname } from "next/navigation";
import Typography from "@mui/joy/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ByOrderText = () => {
	const path = usePathname();
	let isProductList = path === "/"

	return (
		<Typography
			fontWeight={isProductList ? "xs" : "md"}
			level={isProductList ? "body-xs" : "h4"}
			textColor="neutral"
			sx={{ opacity: 0.6 }}
			startDecorator={<AccessTimeIcon sx={{ color: "neutral", fontSize: `${isProductList ? "15" : "18"}` }} />}>
			Por encargo
		</Typography>
	);
};

export default ByOrderText;
