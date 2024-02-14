import Snackbar from "@mui/joy/Snackbar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SnackbarAddedItem = ({openSnackbarSuccess, setOpenSnackbarSuccess}) => {
  const vertical = "top";
  const horizontal = "center";
  
	return (
		<Snackbar
			anchorOrigin={{ vertical, horizontal }}
			variant="soft"
			size="lg"
			color="success"
			autoHideDuration={3000}
			open={openSnackbarSuccess}
			onClose={() => {
				setOpenSnackbarSuccess(false);
			}}
			startDecorator={<CheckCircleIcon />}>
			¡El producto se sumó a tu pedido!
		</Snackbar>
	);
};
export default SnackbarAddedItem;
