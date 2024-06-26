import Stack from "@mui/joy/Stack";
import CartItemCard from "./CartItemCard";

const CartItemList = ({ cartState }) => {
	return (
		<Stack direction="column" justifyContent="center" alignItems="center" spacing={1} sx={{ px: 1.5, py: 1 }}>
			{cartState.map((product, index) => {
        return <CartItemCard
          key={index}
          name={product.name}
          image={product.image}
          variant={product.variant}
          amount={product.amount}
          price={product.price}
          id={product.id}
        />;
			})}
		</Stack>
	);
};
export default CartItemList;
