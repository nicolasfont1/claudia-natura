import Typography from "@mui/joy/Typography";
import Box from "@mui/system/Box";
import Stack from "@mui/joy/Stack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const EmptyCartText = () => {
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			sx={{ minHeight: "100svh", textAlign: "center" }}>
			<Box sx={{ mb: 3 }}>
				<Typography fontWeight="md" level="h3" color="neutral.600">
					Aún no agregaste productos
				</Typography>
				<Typography fontWeight="md" level="h3" color="neutral.600">
					a tu pedido.
				</Typography>
			</Box>

			<Stack direction="column" alignItems="center" sx={{ opacity: 0.6, px: 2 }}>
				<Typography sx={{ mb: 1 }}>
					Para sumar uno, tocá el item que quieras, luego elegí una variante en caso de ser necesario,
					seleccioná la cantidad y finalmente apretá el botón
				</Typography>
				<Typography
					sx={{
						background: "#1F7A1F",
						color: "#FFFFFF",
						fontSize: 12,
						py: 0.5,
						pr: 1,
						pl: 0.7,
						borderRadius: 4,
						display: 'inline-block'
					}}>
					+ Agregar a mi pedido
				</Typography>
			</Stack>
		</Stack>
	);
};
export default EmptyCartText;
