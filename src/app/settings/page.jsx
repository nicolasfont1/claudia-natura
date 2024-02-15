import Box from "@mui/system/Box";
import Typography from "@mui/joy/Typography";
import Navbar from "../components/Navbar";
import Stack from "@mui/joy/Stack";

const SettingsPage = () => {
	return (
		<Stack alignItems="center">
			<Box
				sx={{
					minHeight: "100svh", width: '100%', maxWidth: 540, position: 'relative', borderLeft: 1, borderRight: 1, borderColor: '#dde8ee'
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
		</Stack>
	);
};
export default SettingsPage;
