"use client";
import Stack from "@mui/joy/Stack";
import ProductCard from "./ProductCard";
import ProductsJSON from "../../resources/product-list.json";
import TestProductsJSON from "../../resources/test-product-list.json";
import { useState } from "react";
import SearchHub from "./SearchHub";
import Box from "@mui/system/Box";

const ProductList = () => {
	const [productName, setProductName] = useState("");
	
	const getSearchProducts = (query, products) => {
		if (!query) return products;
		return products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
	};
	
	const filteredProducts = getSearchProducts(productName, TestProductsJSON);

	const handleSearchbar = (event) => {
		setProductName(event.target.value);
	};

	return (
		<Box>
			<SearchHub handleSearchbar={handleSearchbar} />
			<Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ px: 1 }}>
				{filteredProducts.map((product, index) => {
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
	);
};
export default ProductList;
