import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/joy/IconButton";
import CloseRounded from "@mui/icons-material/CloseRounded";

const SearchHub = ({ handleSearchbar }) => {
	return (
		<Stack sx={{ m: 1 }} direction="row" justifyContent="space-between">
			<Input
				variant="soft"
				size="sm"
				placeholder="Búsqueda..."
				endDecorator={
					<IconButton size="sm">
						<SearchIcon />
					</IconButton>
				}
				sx={{ width: "65%", "--Input-focusedThickness": "0.1rem" }}
				onChange={handleSearchbar}
			/>
			<Select variant="soft" size="sm" placeholder="Filtrar" sx={{ width: "25%" }}>
				<Option value={"perfumeria"}>Perfumería</Option>
				<Option value={"belleza"}>Belleza</Option>
			</Select>
		</Stack>
	);
};

export default SearchHub;
