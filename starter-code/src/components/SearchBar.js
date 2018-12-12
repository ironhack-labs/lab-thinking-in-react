import React from "react";

const SearchBar = ({ searchProduct, stockedProduct }) => {
  return (
    <form>
      <input
        onChange={searchProduct}
        placeholder="Search..."
        name="Search"
        type="text"
      />
      <p>
        <input onClick={stockedProduct} type="checkbox" name="checkbox" />
        <span>Only show products in stock</span>
      </p>
    </form>
  );
};

export default SearchBar;
