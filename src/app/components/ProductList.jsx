"use client";
import Stack from "@mui/joy/Stack";
import ProductCard from "./ProductCard";

const ProductList = () => {
	const cardsArray = [1, 2, 3, 4];

	return (
		<Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
			{cardsArray.map((card, index) => {
				return (
					<ProductCard key={index} />
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
