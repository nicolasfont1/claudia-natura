"use client";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import Box from "@mui/system/Box";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Navbar = ({ backPath }) => {
	const path = usePathname();

	return (
		<Box
			component="nav"
			sx={{
				bgcolor: "#dde8ee",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: 60,
				width: "100%",
			}}>
			{path !== "/" && (
				<NextLink href={backPath} passHref>
					<IconButton sx={{ position: "absolute", left: 15, top: 15 }}>
						{<ArrowBackIcon sx={{ color: "neutral.700" }} />}
					</IconButton>
				</NextLink>
			)}
			<Typography fontWeight="lg" level="h1" textColor="neutral.700">
				Clau-tálogo
			</Typography>
			{path === "/" && (
				<NextLink href={`/settings`} passHref>
					<IconButton sx={{ position: "absolute", right: 15, top: 15 }}>
						{<SettingsIcon sx={{ color: "neutral.700" }} />}
					</IconButton>
				</NextLink>
			)}
		</Box>
	);
};

export default Navbar;
