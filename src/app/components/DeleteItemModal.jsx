'use client'
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import DialogActions from "@mui/joy/DialogActions";
import { useDispatch } from "react-redux";
import { deleteItem } from "@/store/slice";

const DeleteItemModal = ({ setModalOpen, modalOpen, itemName, itemVariant }) => {
	const dispatch = useDispatch();
	let selectedItem = {name: itemName, variant: itemVariant}

	const deleteItemFromCart = () => {
		dispatch(deleteItem(selectedItem))
		setModalOpen(false)
	}

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
				<Typography textColor="text.tertiary">
					El producto <em>{itemName}</em> de <em>{itemVariant}</em> se va a retirar de tu pedido.
				</Typography>
				<DialogActions sx={{ mt: 2 }}>
					<Button variant="solid" color="danger" size="xs"  sx={{ml: 1}} onClick={deleteItemFromCart}>
						Eliminar
					</Button>
					<Button variant="plain" color="neutral" size="xs"  onClick={() => setModalOpen(false)}>
						Cancelar
					</Button>
				</DialogActions>
			</Sheet>
		</Modal>
	);
};

export default DeleteItemModal;
