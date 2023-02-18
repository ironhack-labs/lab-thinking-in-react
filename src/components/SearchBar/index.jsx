import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
const { filterText, inStockOnly, onFilterTextChange, onInStockChange } = props;

const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
};

const handleInStockChange = (e) => {
    onInStockChange(e.target.checked);
};

return (
    <form className="SearchBar">
    <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
    />
    <div>
        <input
        type="checkbox"
        id="inStockOnly"
        checked={inStockOnly}
        onChange={handleInStockChange}
        />
        <label htmlFor="inStockOnly">Only show products in stock</label>
    </div>
    </form>
);
}

export default SearchBar;
