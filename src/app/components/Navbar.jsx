"use client";
import { usePathname } from "next/navigation";
import Link from "@mui/material/Link";
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
			sx={{ bgcolor: "#dde8ee", display: "flex", justifyContent: "center", alignItems: "center", height: 60, width: '100%' }}>
			{path !== "/" && (
				<Link href={backPath}>
					<IconButton sx={{ position: "absolute", left: 15, top: 15 }}>
						{<ArrowBackIcon sx={{ color: "neutral.700" }} />}
					</IconButton>
				</Link>
			)}
			<Typography fontWeight="lg" level="h1" textColor="neutral.700">
				Clau-tálogo
			</Typography>
			<Link href={`/settings`}>
				<IconButton sx={{ position: "absolute", right: 15, top: 15 }}>
					{<SettingsIcon sx={{ color: "neutral.700" }} />}
				</IconButton>
			</Link>
		</Box>
	);
};

export default Navbar;
