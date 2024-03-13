import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/joy/IconButton";
import CloseRounded from "@mui/icons-material/CloseRounded";

const SearchHub = ({
	action,
	productCathegory,
	setProductCathegory,
	setProductName,
	productName,
	handleKeyUp,
	handleClearInput,
	showingSearch,
	handleSearchClick,
}) => {
	return (
		<Stack sx={{ m: 1 }} direction="row" justifyContent="space-between">
			<Input
				name="product"
				variant="soft"
				size="sm"
				placeholder="Búsqueda..."
				value={productName}
				onChange={(event) => setProductName(event.target.value)}
				onKeyUp={handleKeyUp}
				endDecorator={
					showingSearch ? (
						<IconButton
							onClick={handleClearInput}
							sx={{ maxHeight: 32 }}
							size="sm"
							variant="plain"
							color="neutral"
							onMouseDown={(event) => {
								event.stopPropagation();
							}}>
							<CloseRounded />
						</IconButton>
					) : (
						<IconButton size="sm" onClick={handleSearchClick}>
							<SearchIcon />
						</IconButton>
					)
				}
				sx={{ width: "60%", "--Input-focusedThickness": "0rem", fontSize: 16 }}
			/>
			<Select
				name="cathegory"
				variant="soft"
				size="sm"
				placeholder="Filtrar"
				sx={{ width: "33%", maxHeight: 32, fontSize: 15 }}
				action={action}
				onChange={(event, newValue) => setProductCathegory(newValue)}
				value={productCathegory}
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
								handleClearInput()
								action.current?.focusVisible();
							}}>
							<CloseRounded />
						</IconButton>
					),
					indicator: null,
				})}>
				<Option value="perfume">Perfume</Option>
				<Option value="jabon">Jabón</Option>
				<Option value="rostro">Rostro</Option>
				<Option value="ojos">Ojos</Option>
				<Option value="unias">Uñas</Option>
				<Option value="cabello">Cabello</Option>
				<Option value="boca">Boca</Option>
				<Option value="crema">Crema</Option>
				<Option value="desodorante">Desodorante</Option>
				<Option value="solar">Solar</Option>
				<Option value="ninios">Niños/as</Option>
				<Option value="varios">Varios</Option>
			</Select>
		</Stack>
	);
};

export default SearchHub;
