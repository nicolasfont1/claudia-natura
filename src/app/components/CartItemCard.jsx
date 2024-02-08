import Box from "@mui/system/Box";
import Stack from "@mui/joy/Stack";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const CartItemCard = ({ name, image, variant, amount, price }) => {
	return (
		<Card orientation="horizontal" variant="outlined" sx={{ width: "95%", bgcolor: "#efebe9", maxWidth: 540, p: 0.8 }}>
			<CardOverflow sx={{ background: "#FFFFFF" }}>
				<AspectRatio ratio="1" sx={{ width: 90, alignSelf: "center" }} objectFit="contain">
					<img src={image} loading="lazy" style={{ background: "#FFFFFF" }} />
				</AspectRatio>
			</CardOverflow>
			<CardContent>
				<Stack direction="row" justifyContent="space-between">
          <Typography fontWeight="md" level="body-sm" textColor="neutral.600" lineHeight={1.1}>
            {name}
          </Typography>
          <div className="h-1" onClick={() => console.log('tocaste')}><MoreHorizIcon /></div>
        </Stack>
				<Typography level="body-xs" textColor="neutral.400" >{variant}</Typography>
				<Typography level="body-xs" textColor="neutral.400">
					{amount} {amount > 1 ? "unidades" : "unidad"}
        </Typography>
        <Typography level="body-md" fontWeight="md" color="success">
					${price * amount}
				</Typography>
			</CardContent>
		</Card>
	);
};
export default CartItemCard;
