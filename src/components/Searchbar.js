import React from 'react';
import { TextField, Checkbox, FormControlLabel } from "@material-ui/core";

function Searchbar({onSearch, onDisplayStock}) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <TextField onChange={onSearch} label="Search" />      
            <FormControlLabel
                control={<Checkbox onChange={onDisplayStock} color="primary" />}
                label="Only show products in stock"
                labelPlacement="end"
            />
        </div>
    )
}

export default Searchbar
