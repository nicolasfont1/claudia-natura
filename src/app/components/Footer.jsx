import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
	return (
		<Stack justifyContent="center" alignItems="center" sx={{ bgcolor: "#dde8ee", width: "100%", height: "50px", position: 'absolute', bottom: 0 }}>
			<Typography
				fontWeight="sm"
				level="body-sm"
        textColor="neutral.500"
        sx={{ opacity: 0.6 }}
				endDecorator={<FavoriteIcon fontSize="sm" />}>
				Hecho con amor para mamá
			</Typography>
		</Stack>
	);
};

export default Footer;
