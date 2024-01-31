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
import Divider from "@mui/joy/Divider";
import Chip from "@mui/joy/Chip";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/joy/IconButton";
import Button from '@mui/joy/Button';
import AddIcon from '@mui/icons-material/Add';
import GrassIcon from '@mui/icons-material/Grass';

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
				<Box sx={{ px: 2, pt: 1 }}>
					<Stack direction="column">
						<Stack direction="row" justifyContent="space-between">
							<Stack>
								<Typography fontWeight="xs" level="body-md" textColor="neutral.600">
									Precio de revista: ${product.magazinePrice}.
								</Typography>
								<Typography fontWeight="md" level="h2" textColor="neutral">
									${product.price}
								</Typography>
							</Stack>
							<Stack justifyContent="center">
								<IconButton size="lg" variant="outlined" sx={{ background: "#90949790", borderColor: "neutral.600" }}>
									{<ShareIcon />}
								</IconButton>
							</Stack>
						</Stack>
						<Divider orientation="horizontal" sx={{ mt: 1, mb: 2 }} />
						<Stack direction="row" justifyContent="space-around">
							{product.inmediateDelivery ? (
								<Chip variant="soft" sx={{ background: "#616A6B", borderRadius: 5 }} size="sm">
									<InmediateDeliveryText />
								</Chip>
							) : (
								<Chip variant="soft" sx={{ background: "#616A6B", borderRadius: 5 }} size="sm">
									<ByOrderText />
								</Chip>
							)}
							{product.vegan && (
								<Chip variant="soft" sx={{ background: "#52BE80", borderRadius: 5 }} size="sm">
									<Typography
										fontWeight="md"
										level="title-sm"
										textColor="success.plainColor"
										startDecorator={<GrassIcon sx={{ fontSize: "18" }} />}>
										Producto vegano
									</Typography>
								</Chip>
							)}
						</Stack>
						<Divider orientation="horizontal" sx={{ mt: 2, mb: 1 }} />
						<Typography fontWeight="md" level="body-sm" textColor="neutral.700" sx={{ opacity: 0.6, mt: 1 }}>
							Disponible en:
						</Typography>
						<Typography fontWeight="md" level="body-sm" textColor="neutral.500">
							{product.variants.map((variant, index) =>
								index !== product.variants.length - 1 ? variant + ", " : variant + "."
							)}
						</Typography>
						{product.info && (
							<>
								<Typography fontWeight="md" level="body-sm" textColor="neutral.700" sx={{ opacity: 0.6, mt: 1 }}>
									Acerca del producto:
								</Typography>
								<Typography fontWeight="md" level="body-sm" textColor="neutral.500">
									{product.info}
								</Typography>
							</>
						)}
					</Stack>
					<Divider orientation="horizontal" sx={{ my: 2 }} />
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
					<Button sx={{ width: '100%', my: 3 }} startDecorator={<AddIcon />} color="success" >Agregar a mi pedido</Button>
				</Box>
			</Box>
		</Stack>
	);
};

export default Page;