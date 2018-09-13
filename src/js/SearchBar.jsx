import React from "react";

const SearchBar = props => {
  return (
    <div className="search-box">
      <input type="text" onChange={event => props.handleChange(event)} />
      <br />
      <input
        type="checkbox"
        name="checkbox"
        id="check"
        onChange={event => props.onlyInStock(event)}
      />
      <label htmlFor="checkbox">Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
