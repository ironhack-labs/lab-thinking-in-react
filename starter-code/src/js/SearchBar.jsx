import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div>
        <input type="text" placeholder="Search.." />
      </div>
      <div>
        <input id="in-stock" type="checkbox" />{" "}
        <label htmlFor="in-stock">Only show products in stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
