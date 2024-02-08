import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

const DeleteItemModal = ({setModalOpen, modalOpen}) => {
	return (
		<Modal
			open={modalOpen}
			onClose={() => setModalOpen(false)}
			sx={{ display: "flex", justifyContent: "center", alignItems: "center", mx: 4 }}>
			<Sheet
				variant="outlined"
				sx={{
					maxWidth: 500,
					borderRadius: "md",
					p: 3,
					boxShadow: "lg",
				}}>
				<ModalClose variant="plain" sx={{ m: 1 }} />
				<Typography component="h2" id="modal-title" level="h4" textColor="inherit" fontWeight="lg" mb={1}>
					¿Deseas eliminar este item?
				</Typography>
				<Typography id="modal-desc" textColor="text.tertiary">
					Make sure to use <code>aria-labelledby</code> on the modal dialog with an optional{" "}
					<code>aria-describedby</code> attribute.
				</Typography>
			</Sheet>
		</Modal>
	);
};

export default DeleteItemModal;
