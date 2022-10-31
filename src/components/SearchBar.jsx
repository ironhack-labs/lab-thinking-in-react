import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function SearchBar() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 3, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Search Products" color="secondary" focused />
      </Box>

      <FormControlLabel
        control={
          <Switch
            // color="secondary"
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            label="End"
          />
        }
        label="Only show products with stock"
      />
    </div>
  );
}
export default SearchBar;
