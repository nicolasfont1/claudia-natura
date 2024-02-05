"use client";
import Stack from "@mui/joy/Stack";
import ProductCard from "./ProductCard";
import ProductsJSON from "../../resources/product-list.json";
import { useState, useRef, useEffect } from "react";
import SearchHub from "./SearchHub";
import Box from "@mui/system/Box";
import CircularProgress from "@mui/joy/CircularProgress";

const ProductList = () => {
	const [productList, setProductList] = useState([]);
	const [currentProductAmount, setCurrentProductAmount] = useState(9);

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
			setProductList(getSearchProducts(productCathegory, productName, ProductsJSON));
		}
	};

	const handleClearInput = () => {
		setProductName('');
		setCurrentProductAmount(9);
		setProductList([...ProductsJSON.slice(0, 9)])
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
		if (!productName) {
			setProductList([...productList, ...ProductsJSON.slice(currentProductAmount - 9, currentProductAmount)]);
		}
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [currentProductAmount]);

	return (
		<Box>
			{!productList.length ? (
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
					/>
					<Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ px: 1, pb: 1 }}>
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
					</Stack>
				</Box>
			)}
		</Box>
	);
};
export default ProductList;
