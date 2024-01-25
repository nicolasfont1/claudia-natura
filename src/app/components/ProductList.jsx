"use client";
import Stack from "@mui/joy/Stack";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import CardOverflow from "@mui/joy/CardOverflow";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
							<Stack direction="row" justifyContent="space-between">
								<Typography fontWeight="lg" level="body-sm" textColor="success.plainColor" lineHeight={1.1}>
									Crema nutritiva para toda la familia
								</Typography>
								<Typography fontWeight="xs" level="body-xs" textColor="#9e9e9e" sx={{ ml: 1 }}>
									400ml
								</Typography>
							</Stack>
							<Link href="" level="body-xs" sx={{ fontWeight: 400, opacity: 0.7 }}>
								Ver fragancias disponibles
							</Link>
							<Typography
								fontWeight="xs"
								level="body-xs"
								textColor="neutral"
								sx={{ opacity: 0.6 }}
								startDecorator={<CheckCircleOutlineIcon sx={{ color: "neutral" }} />}>
								Entrega inmediata
							</Typography>
							<Stack direction="row" sx={{ opacity: 0.8 }}>
								<Typography fontWeight="xs" level="body-xs" color="danger">
									Precio de revista:
								</Typography>
								<Typography fontWeight="xs" level="body-xs" color="danger" sx={{ ml: 1 }}>
									$8900
								</Typography>
							</Stack>
							<Stack direction="row" justifyContent="space-between">
								<Typography fontWeight="md" level="body-md" textColor="success.plainColor">
									$7000
								</Typography>
								<Button color="success" size="sm" variant="soft" startDecorator={<ShoppingCartIcon />}></Button>
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
