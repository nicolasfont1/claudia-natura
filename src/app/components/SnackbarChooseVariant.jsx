import NewReleasesIcon from "@mui/icons-material/NewReleases";
import Snackbar from "@mui/joy/Snackbar";

const SnackbarChooseVariant = ({ openSnackbarVariant, setOpenSnackbarVariant }) => {
	const vertical = "top";
  const horizontal = "center";
  
	return (
		<Snackbar
			anchorOrigin={{ vertical, horizontal }}
			variant="soft"
			size="lg"
			color="danger"
			autoHideDuration={5000}
			open={openSnackbarVariant}
			onClose={() => {
				setOpenSnackbarVariant(false);
			}}
			startDecorator={<NewReleasesIcon />}>
			¡Acordate de elegir una variante!
		</Snackbar>
	);
};
export default SnackbarChooseVariant;
