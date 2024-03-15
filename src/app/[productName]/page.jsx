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
import Button from "@mui/joy/Button";
import AddIcon from "@mui/icons-material/Add";
import GrassIcon from "@mui/icons-material/Grass";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/slice";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";
import SnackbarChooseVariant from "../components/SnackbarChooseVariant";
import SnackbarAddedItem from "../components/SnackbarAddedItem";
import SnackbarShare from "../components/SnackbarShare";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Page = () => {
	const router = useRouter();
	const path = usePathname();
	const product = ProductJSON.find((product) => product.id === path.replace("/", ""));

	const [selectedProduct, setSelectedProduct] = useState({
		name: product.name,
		image: product.image,
		variant: "",
		amount: 0,
		price: product.price,
	});

	const dispatch = useDispatch();
	const [showGoBack, setShowGoBack] = useState(false);

	const addItemToCart = () => {
		if (selectedProduct.variant || product.variants.length === 0) {
			dispatch(addItem(selectedProduct));
			setOpenSnackbarSuccess(true);
			setShowGoBack(true);
		} else {
			setOpenSnackbarVariant(true);
		}
	};

	const shareURL = () => {
		if (navigator.share) {
			navigator
				.share({
					title: "Compartí el link de este producto:",
					text: "",
					url: window.location.href,
				})
				.then(() => console.log("success"))
				.catch((error) => console.log("error", error));
		} else {
			setOpenSnackbarShare(true);
		}
	};

	const [openSnackbarShare, setOpenSnackbarShare] = useState(false);
	const [openSnackbarVariant, setOpenSnackbarVariant] = useState(false);
	const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);

	return (
		<Stack alignItems="center" sx={{ background: "#a79690" }}>
			<Stack
				direction="column"
				justifyContent="center"
				sx={{
					maxWidth: 540,
					width: "100%",
					position: "relative",
					background: "#bcaaa4",
				}}>
				<SnackbarChooseVariant
					openSnackbarVariant={openSnackbarVariant}
					setOpenSnackbarVariant={setOpenSnackbarVariant}
				/>
				<SnackbarAddedItem openSnackbarSuccess={openSnackbarSuccess} setOpenSnackbarSuccess={setOpenSnackbarSuccess} />
				<SnackbarShare openSnackbarShare={openSnackbarShare} setOpenSnackbarShare={setOpenSnackbarShare} />
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
									{product.price ? (
										<Typography fontWeight="md" level="h2" textColor="neutral">
											${product.price}
										</Typography>
									) : (
										<Typography fontWeight="md" level="h2" textColor="neutral">
											Consultar precio
										</Typography>
									)}
								</Stack>
								<Stack justifyContent="center">
									<IconButton
										size="lg"
										variant="outlined"
										sx={{ background: "#90949790", borderColor: "neutral.600" }}
										onClick={() => shareURL()}>
										<ShareIcon />
									</IconButton>
								</Stack>
							</Stack>
							{product.price === 0 && (
								<>
									<Divider orientation="horizontal" sx={{ mt: 1, mb: 2 }} />
									<Stack direction="row" alignItems="center" sx={{ opacity: 0.7, mb: 1 }}>
										<InfoOutlinedIcon sx={{ mr: 1, color: "#616A6B" }} />
										<Typography fontWeight="md" level="body" textColor="neutral.700">
											Natura tiene cientos de productos y de momento no tengo el precio de todos, pero si querés saberlo
											podés agregarlo a tu pedido y yo te lo averiguo!
										</Typography>
									</Stack>
								</>
							)}
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
							{(product.variants.length !== 0 || product.info) && <Divider orientation="horizontal" sx={{ my: 2 }} />}
							{product.variants.length !== 0 && (
								<>
									<Typography fontWeight="md" level="body-sm" textColor="neutral.700" sx={{ opacity: 0.6 }}>
										Disponible en:
									</Typography>
									<Typography fontWeight="md" level="body-sm" textColor="neutral.500" sx={{ mb: 1 }}>
										{product.variants.map((variant, index) =>
											index !== product.variants.length - 1 ? variant + ", " : variant + "."
										)}
									</Typography>
								</>
							)}
							{product.info && (
								<>
									<Typography fontWeight="md" level="body-sm" textColor="neutral.700" sx={{ opacity: 0.6 }}>
										Acerca del producto:
									</Typography>
									<Typography fontWeight="md" level="body-sm" textColor="neutral.500">
										{product.info}
									</Typography>
								</>
							)}
						</Stack>
						<Divider orientation="horizontal" sx={{ mt: 2, mb: 1 }} />
						{product.price !== 0 && (
							<Card variant="soft" sx={{ mt: 2, bgcolor: "#00000030" }}>
								<CardContent>
									<Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
										{product.variants.length !== 0 && (
											<Stack direction="column" sx={{ width: "75%" }}>
												<Typography fontWeight="xs" level="body-sm" textColor="neutral.700" sx={{ opacity: 0.7 }}>
													Seleccionar variante
												</Typography>
												<Select
													name="variant"
													size="md"
													variant="soft"
													placeholder="Elegir..."
													color="neutral"
													onChange={(event, newValue) => setSelectedProduct({ ...selectedProduct, variant: newValue })}
													sx={{ bgcolor: "#00000020", color: "#000000" }}>
													{product.variants.map((variant, index) => {
														return (
															<Option key={index} value={variant}>
																{variant}
															</Option>
														);
													})}
												</Select>
											</Stack>
										)}
										<Stack direction="column" sx={product.variants.length === 0 ? { width: "100%" } : { width: "18%" }}>
											<Typography fontWeight="xs" level="body-sm" textColor="neutral.700" sx={{ opacity: 0.7 }}>
												Cantidad
											</Typography>
											<Select
												name="amount"
												size="md"
												variant="soft"
												defaultValue={1}
												color="neutral"
												onChange={(event, newValue) => setSelectedProduct({ ...selectedProduct, amount: newValue })}
												sx={{ bgcolor: "#00000020", color: "#000000", width: "100%" }}>
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
						)}
						{!showGoBack ? (
							<Button
								sx={{ width: "100%", my: 3 }}
								startDecorator={<AddIcon />}
								color="success"
								onClick={addItemToCart}>
								Agregar a mi pedido
							</Button>
						) : (
							<Button sx={{ width: "100%", my: 3 }} color="warning" variant="outlined" onClick={() => router.push("/")}>
								Volver al catálogo
							</Button>
						)}
						<Divider orientation="horizontal" sx={{ mb: 0.5, fontSize: 14 }}>
							¿Te confundiste?
						</Divider>
						<Typography
							fontWeight="md"
							level="body-xs"
							textColor="neutral.600"
							sx={{ opacity: 0.6, textAlign: "center" }}>
							¡No te preocupes!
						</Typography>
						<Typography
							fontWeight="md"
							level="body-xs"
							textColor="neutral.600"
							sx={{ opacity: 0.6, alignItems: "center", display: "flex", justifyContent: "center", mb: 2 }}>
							Podés revisar tu orden desde la pestaña &quot;Mi pedido{" "}
							<ShoppingCartIcon sx={{ fontSize: 13, ml: 0.3 }} />
							&quot;.
						</Typography>
					</Box>
				</Box>
			</Stack>
		</Stack>
	);
};

export default Page;
