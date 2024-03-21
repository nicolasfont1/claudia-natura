import Button from "@mui/joy/Button";
import Snackbar from "@mui/joy/Snackbar";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const SnackbarShare = ({openSnackbarShare, setOpenSnackbarShare}) => {
  const vertical = "top";
  const horizontal = "center";
  
	return (
		<Snackbar
			anchorOrigin={{ vertical, horizontal }}
			variant="soft"
			size="lg"
			color="warning"
			autoHideDuration={3000}
			open={openSnackbarShare}
			onClose={() => {
				setOpenSnackbarShare(false);
			}}
			startDecorator={<SentimentDissatisfiedIcon />}
			endDecorator={
				<Button onClick={() => setOpenSnackbarShare(false)} size="xs" variant="soft" color="warning">
					✕
				</Button>
			}>
			Tu navegador no es compatible con esta función.
		</Snackbar>
	);
};
export default SnackbarShare;
