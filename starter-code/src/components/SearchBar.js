import React from "react";

function SearchBar(props) {
  return (
    <div className="search-container">
      <div className="searchBar">
        <h3>Search</h3>
        <textarea
          id="searchBar"
          name="searchBarValue"
          value={props.value}
          onChange={e => props.filteringProduct(e)}
        />
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          id="stock"
          name="stock"
          onChange={() => props.showingProduct()}
          defaultChecked={props.checked}
        />
        <label for="stock">Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
