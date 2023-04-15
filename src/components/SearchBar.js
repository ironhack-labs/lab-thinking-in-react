// SearchBar.js

import React from "react";

function SearchBar(props) {
  const handleSearch = (event) => {
    props.setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={props.searchTerm} onChange={handleSearch} />
      <br />
      <input
        type="checkbox"
        checked={props.showInStock}
        onChange={props.handleInStockChange}
      />
      Only show products in stock
    </div>
  );
}

export default SearchBar;
