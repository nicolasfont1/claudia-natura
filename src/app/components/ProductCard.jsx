"use client";
import Link from "next/link";
import Card from "@mui/joy/Card";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import ByOrderText from "./ByOrderText";
import InmediateDeliveryText from "./InmediateDeliveryText";

const ProductCard = ({ id, name, size, inmediateDelivery, magazinePrice, price, image, sizeUnit, refillment }) => {
	return (
		<Link href={`/${id}`} style={{ width: "96%", maxWidth: 540, textDecoration: "none" }}>
			<Card orientation="horizontal" variant="soft" sx={{ bgcolor: "#efebe9" }}>
				<CardOverflow sx={{ bgcolor: "#fff", alignContent: "center" }}>
					<AspectRatio ratio="1" sx={{ width: 140, alignSelf: "center" }} objectFit="contain">
						<img src={image} loading="lazy" alt={name} style={{ background: "#FFFFFF" }} />
					</AspectRatio>
				</CardOverflow>
				<CardContent>
					<Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
						<Typography
							fontWeight="lg"
							level="body-sm"
							textColor="success.plainColor"
							lineHeight={1.1}
							sx={refillment ? {} : { mb: 1 }}>
							{name}
						</Typography>
						<Typography fontWeight="xs" level="body-xs" textColor="#9e9e9e" sx={{ ml: 1 }}>
							{size}
							{sizeUnit}
						</Typography>
					</Stack>
					<Stack direction="column" justifyContent="space-between" sx={{ height: "100%" }}>
						{refillment && (
							<Typography level="body-xs" sx={{ opacity: 0.7 }} color="">
								Repuestos disponibles
							</Typography>
						)}
						{inmediateDelivery ? <InmediateDeliveryText /> : <ByOrderText />}
						<Typography fontWeight="xs" level="body-xs" color="danger" sx={{ opacity: 0.8 }}>
							Precio de revista: ${magazinePrice}
						</Typography>
						<Typography fontWeight="md" level="body-md" textColor="success.plainColor">
							{price !== 0 ? `$${price}` : 'Consultar'}
						</Typography>
					</Stack>
				</CardContent>
			</Card>
		</Link>
	);
};
export default ProductCard;
