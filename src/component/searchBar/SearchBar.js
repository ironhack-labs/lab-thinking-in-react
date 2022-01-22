import React from "react";

const SearchBar = () => {
  return (
    <div>
      <h1>Searchbar</h1>
      <input
        type="text"
        placeholder="Search for an item"
        //value={}
      />
      <br />
      <label htmlFor="inStock">Only show products in stock</label>
      <input type="checkbox" name="inStock" id="" />
    </div>
  );
};

export default SearchBar;
