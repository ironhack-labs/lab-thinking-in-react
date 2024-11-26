import { useState } from "react";

function SearchBar({ search, handleSearch, inStock, handleInStock }) {
    return (
        <form style={{ marginBottom: "10px" }} >
            <p>Search</p>

            <form style={{ marginBottom: "10px" }}>
                <input type="text" placeholder="Search..." value={search} onChange={handleSearch} />
            </form>

            <label>
                <input type="checkbox" name="stock" checked={inStock} onChange={handleInStock} />
                <label htmlFor="stock-available" >Only show products in stock</label>
            </label>
        </form>
    );
}

export default SearchBar;