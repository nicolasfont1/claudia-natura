"use client";
import Stack from "@mui/joy/Stack";
import ProductCard from "./ProductCard";
import ProductsJSON from "../../resources/product-list.json";
import { useState } from "react";
import SearchHub from "./SearchHub";
import Box from "@mui/system/Box";

const ProductList = () => {
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [productName, setProductName] = useState("");

	const handleSearchbar = (event) => {
		setProductName(event.target.value);
		console.log(productName)
	};

	return (
		<Box>
			<SearchHub handleSearchbar={ handleSearchbar } />
			<Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ px: 1 }}>
				{/* {ProductsJSON.map((product, index) => {
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
				})} */}
			</Stack>
		</Box>
	);
};
export default ProductList;
