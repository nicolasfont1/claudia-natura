import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/joy/IconButton";
import CloseRounded from "@mui/icons-material/CloseRounded";

const SearchHub = ({ action, productCathegory, setProductCathegory, setProductName, productName, handleKeyUp }) => {
	return (
		<Stack sx={{ m: 1 }} direction="row" justifyContent="space-between">
			<Input
				value={productName}
				variant="soft"
				size="sm"
				placeholder="Búsqueda..."
				endDecorator={
					productName ? (
						<IconButton
							sx={{ maxHeight: 32 }}
							size="sm"
							variant="plain"
							color="neutral"
							onMouseDown={(event) => {
								event.stopPropagation();
							}}
							onClick={() => {
								setProductName("");
							}}>
							<CloseRounded />
						</IconButton>
					) : (
						<IconButton size="sm">
							<SearchIcon />
						</IconButton>
					)
				}
				sx={{ width: "60%", "--Input-focusedThickness": "0rem", fontSize: 16 }}
				onChange={(event) => setProductName(event.target.value)}
				onKeyUp={handleKeyUp}
			/>
			<Select
				variant="soft"
				size="sm"
				placeholder="Filtrar"
				sx={{ width: "33%", maxHeight: 32, fontSize: 15 }}
				onChange={(event, newValue) => setProductCathegory(newValue)}
				value={productCathegory}
				action={action}
				{...(productCathegory && {
					endDecorator: (
						<IconButton
							sx={{ maxHeight: 32 }}
							size="sm"
							variant="plain"
							color="neutral"
							onMouseDown={(event) => {
								event.stopPropagation();
							}}
							onClick={() => {
								setProductCathegory(null);
								action.current?.focusVisible();
							}}>
							<CloseRounded />
						</IconButton>
					),
					indicator: null,
				})}>
				<Option value="perfumeria">Perfumería</Option>
				<Option value="belleza">Belleza</Option>
			</Select>
		</Stack>
	);
};

export default SearchHub;
