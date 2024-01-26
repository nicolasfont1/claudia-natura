"use client";
import Stack from "@mui/joy/Stack";
import ProductCard from "./ProductCard";
import ProductsJSON from "../../resources/product-list.json";

const ProductList = () => {
	return (
		<Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
			{ProductsJSON.map((product, index) => {
				return (
					<ProductCard
						key={index}
						id={product.id}
						name={product.name}
						size={product.size}
						inmediateDelivery={product.inmediateDelivery}
						magazinePrice={product.magazinePrice}
						price={product.price}
						image={product.image}
					/>
				);
			})}
		</Stack>
	);
};
export default ProductList;