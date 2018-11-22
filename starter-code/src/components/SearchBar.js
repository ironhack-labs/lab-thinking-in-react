import React from "react";

const SearchBar = ({ searchChange, searchCheckbox }) => (
  <form className="uk-search uk-search-large">
    <input className="uk-search-input" type="text" placeholder="Search..." onChange={searchChange} />
    <input type="checkbox" onClick={searchCheckbox} /> Only show products in stock
  </form>
);

export default SearchBar;