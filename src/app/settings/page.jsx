import Box from "@mui/system/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "../components/Navbar";

const SettingsPage = () => {
	return (
		<Box
			sx={{
				minHeight: "100svh",
			}}>
			<Navbar />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
          justifyContent: "center",
          height: '90svh'
				}}>
				<Typography fontWeight="md" level="body-lg" textColor="neutral">
					Hola persona curiosa,
				</Typography>
				<Typography fontWeight="md" level="body-lg" textColor="neutral">
          esta sección sigue en desarrollo.
        </Typography>
        <Typography fontWeight="md" level="body-lg" textColor="neutral">
          {`:)`}
				</Typography>
				<Link href={`/`}>
					<IconButton sx={{ position: "absolute", left: 15, top: 15 }}>
						{<ArrowBackIcon sx={{ color: "neutral.700" }} />}
					</IconButton>
				</Link>
			</Box>
		</Box>
	);
};
export default SettingsPage;
