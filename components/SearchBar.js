import React from 'react';

function SearchBar({onSearch, onDisplayStock}){
        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <TextField onChange={onSearch} label="Search" />
                <FormControlLabel
                control={<CheckBox onChange={onDisplayStock} color="primary" />}
                label="Only show products in stock"
                labelPlacement="end"
                />
            </div>
        )
}

export default SearchBar