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
import HeightIcon from '@mui/icons-material/Height';

const Page = () => {
	const path = usePathname();
	const product = ProductJSON.find((product) => product.id === path.replace("/", ""));

	return (
		<Box>
			<Navbar backPath={"/"} />
			<Card sx={{ minHeight: "280px", borderRadius: 0 }} variant="plain">
				<CardCover>
					<img src={product.image} loading="lazy" alt={product.id} />
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
							{product.size}ml
						</Typography>
					</Stack>
				</CardContent>
			</Card>
		</Box>
	);
};

export default Page;
