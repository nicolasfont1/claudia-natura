import Box from "@mui/system/Box";
import Typography from "@mui/joy/Typography";
import Navbar from "../components/Navbar";

const SettingsPage = () => {
	return (
		<Box
			sx={{
				minHeight: "100svh",
			}}>
			<Navbar backPath={'/'} />
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
			</Box>
		</Box>
	);
};
export default SettingsPage;
