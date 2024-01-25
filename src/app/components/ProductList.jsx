"use client";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ProductList = () => {
	const cardsArray = [1, 2, 3, 4];

	return (
		<Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
			{cardsArray.map((card, index) => {
				return (
					<Card
						orientation="horizontal"
						variant="soft"
						sx={{ width: "90%", bgcolor: "#efebe9", maxWidth: 540 }}
						key={index}>
						<CardOverflow sx={{ bgcolor: "#fff", alignContent: "center" }}>
							<AspectRatio ratio="1" sx={{ width: 140 }}>
								<img
									src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw5d10df90/NATARG-74900_1.jpg"
									loading="lazy"
									alt=""
								/>
							</AspectRatio>
						</CardOverflow>
						<CardContent>
								{/* PRODUCT NAME AND SIZE */}
								<Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
									<Typography fontWeight="lg" level="body-sm" textColor="success.plainColor" lineHeight={1.1}>
										Crema nutritiva
									</Typography>
									<Typography fontWeight="xs" level="body-xs" textColor="#9e9e9e" sx={{ ml: 1 }}>
										400ml
									</Typography>
								</Stack>

								{/* SEE FRAGANCES AND DELIVERY AVAILABILITY */}
								<Stack direction="column">
									<Link href="" level="body-xs" sx={{ fontWeight: 400, opacity: 0.7 }}>
										Ver fragancias disponibles
									</Link>
									<Typography
										fontWeight="xs"
										level="body-xs"
										textColor="neutral"
										sx={{ opacity: 0.6 }}
										startDecorator={<CheckCircleOutlineIcon sx={{ color: "neutral", fontSize: 15 }} />}>
										Entrega inmediata
									</Typography>
								</Stack>

								{/* ORIGINAL PRICE AND CLAUDIA PRICE */}
								<Stack direction="column">
									<Typography fontWeight="xs" level="body-xs" color="danger" sx={{ opacity: 0.8 }}>
										Precio de revista: $8900
									</Typography>
									<Stack direction="row" justifyContent="space-between">
										<Typography fontWeight="md" level="body-md" textColor="success.plainColor">
											$7000
										</Typography>
										<IconButton color="success" size="xs">
											{<AddCircleOutlineIcon />}
										</IconButton>
									</Stack>
								</Stack>
						</CardContent>
					</Card>
				);
			})}
		</Stack>
	);
};
export default ProductList;

{
	/* flor de lis, frambuesa y pimienta rosa, mango rosa y agua de coco, nuez pecán y cacao, mora roja y
								jabuticaba, frutas rojas, hojas de limón y guanábana, avellana y casis */
}
