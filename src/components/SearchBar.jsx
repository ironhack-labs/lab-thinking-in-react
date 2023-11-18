import React from "react";

function SearchBar({ searchHandle, stockHandle }) {
  return (
    <>
      <div>
        <input onChange={searchHandle} type="text" placeholder="Searchbar.." />
      </div>
      <div>
        <input
          onChange={stockHandle}
          type="checkbox"
          id="instock"
          name="instock"
          value="instock"
        />
        <label htmlFor="inStock">Only show products in stock</label>
      </div>
    </>
  );
}

export default SearchBar;
