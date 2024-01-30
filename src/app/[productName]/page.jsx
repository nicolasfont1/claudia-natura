"use client";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Box from "@mui/system/Box";
import ProductJSON from "../../resources/product-list.json";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import ByOrderText from "../components/ByOrderText";
import InmediateDeliveryText from "../components/InmediateDeliveryText";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import YardIcon from "@mui/icons-material/Yard";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Page = () => {
	const path = usePathname();
	const product = ProductJSON.find((product) => product.id === path.replace("/", ""));

	return (
		<Stack direction="column" justifyContent="center">
			<Navbar backPath={"/"} />
			<Box sx={{ width: "100%", maxWidth: 540 }}>
				<Card sx={{ minHeight: "400px", borderRadius: 0 }} variant="plain">
					<CardCover>
						<img
							src={product.image}
							loading="lazy"
							alt={product.id}
							style={{ objectFit: "contain", background: "#FFFFFF" }}
						/>
					</CardCover>
					<CardCover
						sx={{
							background:
								"linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
						}}
					/>
					<CardContent sx={{ justifyContent: "flex-end" }}>
						<Stack sx={{ lineHeight: 1 }}>
							<Typography level="h2" textColor="neutral.200">
								{product.name}
							</Typography>
							<Typography level="title-lg" fontWeight="sm" textColor="neutral.200">
								{product.size}
								{product.sizeUnit}
							</Typography>
						</Stack>
					</CardContent>
				</Card>
				<Box sx={{ minHeight: "500px", p: 2 }}>
					<Stack direction="column">
						{product.inmediateDelivery ? <InmediateDeliveryText /> : <ByOrderText />}
						{product.vegan && (
							<Typography
								fontWeight="md"
								level="h4"
								textColor="success.plainColor"
								sx={{ opacity: 0.9 }}
								startDecorator={<YardIcon />}>
								Producto vegano
							</Typography>
						)}
						<Card variant="soft" sx={{ mt: 1, bgcolor: "#00000030" }}>
							<CardContent>
								<Stack direction="row" justifyContent="space-between">
									<Stack direction="column" justifyContent="space-between">
										<Typography fontWeight="xs" level="body-md" textColor="neutral" sx={{ opacity: 0.8 }}>
											Precio de revista: ${product.magazinePrice}.
										</Typography>
										<Typography fontWeight="md" level="h4" textColor="neutral">
											${product.price}
										</Typography>
									</Stack>
								</Stack>
							</CardContent>
						</Card>
						<Typography fontWeight="md" level="body-sm" textColor="neutral.700" sx={{ opacity: 0.6, mt: 1 }}>
							Disponible en:
						</Typography>
						<Typography fontWeight="md" level="body-sm" textColor="neutral.600" sx={{ opacity: 0.8 }}>
							{product.variants.map((variant, index) =>
								index !== product.variants.length - 1 ? variant + ", " : variant + "."
							)}
						</Typography>
					</Stack>
					<Card variant="soft" sx={{ mt: 1, bgcolor: "#00000030" }}>
						<CardContent>
							<Stack direction="row" justifyContent="space-between">
								<Stack direction="column">
									<Typography fontWeight="xs" level="body-sm" textColor="neutral.700" sx={{ opacity: 0.7 }}>
										Seleccionar variante
									</Typography>
									<Select
										size="md"
										variant="soft"
										placeholder="Elegir..."
										color="neutral"
										sx={{ bgcolor: "#00000020", color: "#000000", minWidth: 200, maxWidth: 220 }}>
										{product.variants.map((variant, index) => {
											return (
												<Option key={index} value={variant}>
													{variant}
												</Option>
											);
										})}
									</Select>
								</Stack>
								<Stack direction="column" sx={{ mr: 2 }}>
									<Typography fontWeight="xs" level="body-sm" textColor="neutral.700" sx={{ opacity: 0.7 }}>
										Cantidad
									</Typography>
									<Select
										size="md"
										variant="soft"
										defaultValue={1}
										color="neutral"
										sx={{ bgcolor: "#00000020", color: "#000000" }}>
										<Option value={1}>1</Option>
										<Option value={2}>2</Option>
										<Option value={3}>3</Option>
										<Option value={4}>4</Option>
										<Option value={5}>5</Option>
									</Select>
								</Stack>
							</Stack>
						</CardContent>
					</Card>
					<Typography
						startDecorator={<InfoOutlinedIcon />}
						fontWeight="md"
						level="body-xs"
						textColor="neutral.600"
						sx={{ opacity: 0.8, mt: 1 }}>
						{product.info}
					</Typography>
				</Box>
			</Box>
		</Stack>
	);
};

export default Page;

// {
// 	"id": "lapiz-cejas",
// 	"name": "Lápiz para cejas",
// 	"size": 1.14,
// 	"sizeUnit": "g",
// 	"inmediateDelivery": false,
// 	"magazinePrice": 8630,
// 	"price": 0,
// 	"fragances": [
// 		"castaño claro",
// 		"castaño"
// 	],
// 	"vegan": true,
// 	"made": ["Brasil"],
// 	"image": "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw7123cb65/1200x1200/10156_1.jpg",
// 	"cathegory": "belleza",
// 	"info": ""
// }
