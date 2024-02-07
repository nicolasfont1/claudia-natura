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
			sx={{ minHeight: "68svh", textAlign: "center" }}>
			<Box sx={{ mb: 3 }}>
				<Typography fontWeight="md" level="h3" color="neutral.600">
					Aún no agregaste productos
				</Typography>
				<Typography fontWeight="md" level="h3" color="neutral.600">
					a tu pedido.
				</Typography>
			</Box>

			<Stack direction="column" alignItems="center" sx={{ opacity: 0.6 }}>
				<Typography sx={{ display: "flex", alignItems: "center" }}>
					Para sumar uno, tocá el botón <AddCircleOutlineIcon color="success" sx={{ ml: 0.5 }} />{" "}
				</Typography>
				<Typography>dentro del item que quieras, luego elegí</Typography>
				<Typography>una variante en caso de ser necesario,</Typography>
				<Typography>seleccioná la cantidad y finalmente</Typography>
				<Typography>
					apretá el botón{" "}
					<Typography
						sx={{
							background: "#1F7A1F",
							color: "#FFFFFF",
							fontSize: 12,
							py: 0.5,
							pr: 1,
							pl: 0.7,
							borderRadius: 4,
						}}>
						+ Agregar a mi pedido
					</Typography>
					.
				</Typography>
			</Stack>
		</Stack>
	);
};
export default EmptyCartText;
