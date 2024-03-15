import Stack from "@mui/joy/Stack";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import IconButton from "@mui/joy/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import DeleteItemModal from "./DeleteItemModal";

const CartItemCard = ({ name, image, variant, amount, price }) => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<Card orientation="horizontal" variant="outlined" sx={{ width: "95%", bgcolor: "#efebe9", maxWidth: 540, p: 0.8 }}>
			<DeleteItemModal setModalOpen={setModalOpen} modalOpen={modalOpen} itemName={name} itemVariant={variant} />
			<CardOverflow sx={{ background: "#FFFFFF" }}>
				<AspectRatio ratio="1" sx={{ width: 90, alignSelf: "center" }} objectFit="contain">
					<img src={image} loading="lazy" style={{ background: "#FFFFFF" }} />
				</AspectRatio>
			</CardOverflow>
			<CardContent>
				<Stack direction="column" justifyContent="space-between" sx={{height: '100%'}}>
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight="md" level="body-sm" textColor="neutral.600" lineHeight={1.1}>
              {name}
            </Typography>
            <Dropdown>
              <MenuButton
                sx={{ height: 15 }}
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: "plain", color: "neutral", size: "xs" } }}>
                <MoreHorizIcon />
              </MenuButton>
              <Menu placement="bottom-end" variant="soft" sx={{ p: 0 }}>
                {/* <MenuItem>Editar</MenuItem> */}
                <MenuItem onClick={() => setModalOpen(true)}>
                  <DeleteIcon />
                  <Typography level="body-sm">Eliminar</Typography>
                </MenuItem>
              </Menu>
            </Dropdown>
          </Stack>
          <Typography level="body-xs" textColor="neutral.400">
            {variant}
          </Typography>
          {amount !== 0 && (
            <Typography level="body-xs" textColor="neutral.400">
              {amount} {amount > 1 ? "unidades" : "unidad"}
            </Typography>
          )}
          {price === 0 ? (
            <Typography level="body-md" fontWeight="md" color="success">
              Consulta de precio
            </Typography>
          ) : (
            <Typography level="body-md" fontWeight="md" color="success">
              ${price * amount}
            </Typography>
          )}
        </Stack>
			</CardContent>
		</Card>
	);
};
export default CartItemCard;
