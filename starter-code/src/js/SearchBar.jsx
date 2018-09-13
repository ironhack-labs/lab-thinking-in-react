import React from "react";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <div>
        <input
          className="search-field"
          type="text"
          placeholder="Search.."
          onChange={props.handleQueryChange}
          value={props.query}
        />
      </div>
      <div>
        <input
          id="in-stock"
          type="checkbox"
          onClick={props.handleStockedFilter}
          // onChange={props.handleStockedFilter}
          value={props.showOnlyStocked}
        />{" "}
        <label htmlFor="in-stock">Only show products in stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
