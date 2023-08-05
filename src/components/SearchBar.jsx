import React, { useState } from "react";

const SearchBar = ({onSearch, onStockChange}) => {
    const [search, setSearch] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleChange = (event) => {
        const query = event.target.value;
        setSearch(query);
        onSearch(query, inStockOnly);

    };

    const handleCheckbox = (event) => {
        const checked = event.target.checked;
        setInStockOnly(checked);
        onStockChange(checked);
        onSearch(search, checked);
    };

    return (
        <div>
            <input type="text" placeholder="Search" value={search} onChange={handleChange}/>
            <p><input type="checkbox" checked={inStockOnly} onChange={handleCheckbox} />Show only products in stock</p>
        </div>
    );
};

export default SearchBar;