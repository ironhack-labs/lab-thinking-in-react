import React from "react";

function SearchBar(props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="text"
        placeholder="Search..."
        value={props.searchValue}
        onChange={(e) => props.handleSearch(e.target.value)}
        style={{ width: "480px", height: "30px", marginRight: "10px" }}
      />
      <input
        type="checkbox"
        id="inStock"
        checked={props.showInStock}
        onChange={props.handleStockChange}
        style={{ marginRight: "5px" }}
      />
      <label htmlFor="inStock" style={{ marginRight: "10px" }}>Only show products in stock</label>
    </div>
  );
}

export default SearchBar;
