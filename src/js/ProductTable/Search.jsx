import React from "react";
//rsc Shortcut for "dumb Component"

const Search = props => {
  return (
    <div className="searchBar">
      <input
        className="bar"
        onChange={props.handleSearchQuery}
        value={props.search}
        type="text"
        placeholder="search..."
      />
      <label class="container-checkbox">
        Only show products in stock
        <input
          onChange={props.handleCheckBox}
          type="checkbox"
          name="inStock"
          value="inStock"
          checked={props.checked}
        />
        <span class="checkmark" />
      </label>
    </div>
  );
};

export default Search;
