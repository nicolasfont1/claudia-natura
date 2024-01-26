import Typography from "@mui/joy/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const InmediateDeliveryText = () => {
	return (
		<Typography
			fontWeight="xs"
			level="body-xs"
			textColor="neutral"
			sx={{ opacity: 0.6 }}
			startDecorator={<CheckCircleOutlineIcon sx={{ color: "neutral", fontSize: 15 }} />}>
			Entrega inmediata
		</Typography>
	);
};

export default InmediateDeliveryText;
