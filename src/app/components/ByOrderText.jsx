import Typography from "@mui/joy/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ByOrderText = () => {
	return (
		<Typography
			fontWeight="xs"
			level="body-xs"
			textColor="neutral"
			sx={{ opacity: 0.6 }}
			startDecorator={<AccessTimeIcon sx={{ color: "neutral", fontSize: 15 }} />}>
			Por encargo
		</Typography>
	);
};

export default ByOrderText;
