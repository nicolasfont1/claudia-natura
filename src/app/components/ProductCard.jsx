"use client";
import Link from "next/link";
import Card from "@mui/joy/Card";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ByOrderText from "./ByOrderText";
import InmediateDeliveryText from "./InmediateDeliveryText";

const ProductCard = ({ id, name, size, inmediateDelivery, magazinePrice, price, image, sizeUnit }) => {
	return (
		<Card orientation="horizontal" variant="soft" sx={{ width: "91%", bgcolor: "#efebe9", maxWidth: 540 }}>
			<CardOverflow sx={{ bgcolor: "#fff", alignContent: "center" }}>
				<AspectRatio ratio="1" sx={{ width: 140, alignSelf: 'center' }} objectFit="contain">
					<img src={image} loading="lazy" alt="" style={{ background: "#FFFFFF" }} />
				</AspectRatio>
			</CardOverflow>
			<CardContent>
				{/* PRODUCT NAME AND SIZE */}
				<Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
					<Typography fontWeight="lg" level="body-sm" textColor="success.plainColor" lineHeight={1.1}>
						{name}
					</Typography>
					<Typography fontWeight="xs" level="body-xs" textColor="#9e9e9e" sx={{ ml: 1 }}>
						{size}{sizeUnit}
					</Typography>
				</Stack>

				{/* SEE FRAGANCES AND DELIVERY AVAILABILITY */}
				<Stack direction="column">
					<Link href={`/${id}`} style={{textDecoration: 'none'}}>
						<Typography level="body-xs" sx={{ fontWeight: 400, opacity: 0.7 }} color="primary">Ver fragancias disponibles</Typography>
					</Link>
					{inmediateDelivery ? <InmediateDeliveryText /> : <ByOrderText />}
				</Stack>

				{/* ORIGINAL PRICE AND CLAUDIA PRICE */}
				<Stack direction="column">
					<Typography fontWeight="xs" level="body-xs" color="danger" sx={{ opacity: 0.8 }}>
						Precio de revista: ${magazinePrice}
					</Typography>
					<Stack direction="row" justifyContent="space-between">
						<Typography fontWeight="md" level="body-md" textColor="success.plainColor">
							${price}
						</Typography>
						<IconButton color="success" size="xs">
							<Link href={`/${id}`}>
								{<AddCircleOutlineIcon color="success" />}
							</Link>
						</IconButton>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};
export default ProductCard;
