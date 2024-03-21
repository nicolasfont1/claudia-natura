import Button from "@mui/joy/Button";
import Snackbar from "@mui/joy/Snackbar";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

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
			startDecorator={<NewReleasesIcon />}
			endDecorator={
				<Button onClick={() => setOpenSnackbarVariant(false)} size="xs" variant="soft" color="danger">
					✕
				</Button>
			}>
			¡Acordate de elegir una variante!
		</Snackbar>
	);
};
export default SnackbarChooseVariant;
