import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from '@mui/material';

function Searchbar(props) {
  return (
    <div>
      <Stack justifyContent="space-around" alignItems="center" spacing={3}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          onChange={(event) => props.searchName(event.target.value)}
        />
        <FormGroup>
          <FormControlLabel
            align="center"
            control={
              <Checkbox
                onChange={(event) => props.avaliableItens(event.target.checked)}
              />
            }
            label="Only show products in stock"
          />
        </FormGroup>
      </Stack>
    </div>
  );
}

export default Searchbar;
