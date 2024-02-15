"use client";
import Stack from "@mui/joy/Stack";
import ProductCard from "./ProductCard";
import ProductsJSON from "../../resources/product-list.json";
import { useState, useRef, useEffect } from "react";
import SearchHub from "./SearchHub";
import Box from "@mui/system/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";

const ProductList = () => {
	const [productList, setProductList] = useState([]);
	const [currentProductAmount, setCurrentProductAmount] = useState(9);

	const [initialLoader, setInitialLoader] = useState(true);
	const [showingSearch, setShowingSearch] = useState(false);

	const action = useRef(null);
	const [productName, setProductName] = useState("");
	const [productCathegory, setProductCathegory] = useState(null);

	const handleScroll = () => {
		const scrollY = window.scrollY;
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		if (scrollY + windowHeight >= documentHeight - 100) {
			setCurrentProductAmount(currentProductAmount + 9);
		}
	};

	const handleKeyUp = (event) => {
		if (event.keyCode === 13) {
			if (productName) {
				setShowingSearch(true);
				setProductList(getSearchProducts(productCathegory, productName, ProductsJSON));
			}
		}
	};

	const handleSearchClick = () => {
		setShowingSearch(true);
		setProductList(getSearchProducts(productCathegory, productName, ProductsJSON));
	};

	const handleClearInput = () => {
		setShowingSearch(false);
		setProductName("");
		setProductCathegory(null)
		setCurrentProductAmount(9);
		setProductList([...ProductsJSON.slice(0, 9)]);
	};

	const getSearchProducts = (productFilter, productQuery, products) => {
		let productsCopy = [...products];

		if (productFilter) {
			productsCopy = products.filter((product) => product.cathegory === productFilter);
		}
		if (!productQuery) return productsCopy;
		return productsCopy.filter((product) => product.name.toLowerCase().includes(productQuery.toLowerCase()));
	};

	useEffect(() => {
		setProductList(getSearchProducts(productCathegory, productName, ProductsJSON));
		if (!productCathegory) {
			setCurrentProductAmount(9);
			setProductList([...ProductsJSON.slice(0, 9)]);
		}
	}, [productCathegory]);

	useEffect(() => {
		if (!productName && !productCathegory) {
			setProductList([...productList, ...ProductsJSON.slice(currentProductAmount - 9, currentProductAmount)]);
		}
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [currentProductAmount]);

	useEffect(() => {
		if (productList.length) {
			setInitialLoader(false);
		}
	}, [productList]);

	return (
		<Box>
			{initialLoader ? (
				<Stack justifyContent="center" alignItems="center" sx={{ minHeight: "68svh" }}>
					<CircularProgress size="lg" color="warning" value={60} variant="plain" />
				</Stack>
			) : (
				<Box>
					<SearchHub
						action={action}
						productCathegory={productCathegory}
						setProductCathegory={setProductCathegory}
						productName={productName}
						setProductName={setProductName}
						handleKeyUp={handleKeyUp}
						handleClearInput={handleClearInput}
						showingSearch={showingSearch}
						handleSearchClick={handleSearchClick}
					/>
					<Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ pb: 1 }}>
						{productList.map((product, index) => {
							return (
								<ProductCard
									key={index}
									id={product.id}
									name={product.name}
									size={product.size}
									sizeUnit={product.sizeUnit}
									inmediateDelivery={product.inmediateDelivery}
									magazinePrice={product.magazinePrice}
									price={product.price}
									image={product.image}
								/>
							);
						})}
						{!productList.length && !initialLoader && (
							<Stack direction="column" justifyContent="center" alignItems="center" sx={{ minHeight: "68svh" }}>
								<Typography fontWeight="lg" level="title-lg" textColor="neutral.700">
									Ningún producto
								</Typography>
								<Typography fontWeight="lg" level="title-lg" textColor="neutral.700">
									coincide con tu búsqueda
								</Typography>
								<Typography fontWeight="lg" level="h3" textColor="neutral.700">
									:(
								</Typography>
							</Stack>
						)}
					</Stack>
				</Box>
			)}
		</Box>
	);
};
export default ProductList;
