import React from "react";

const SearchBar = ({handleSearch}) => (
  <div className="uk-width-expand uk-text-center">
    <h3 className="uk-text-large uk-text-muted">Search</h3>
    <div className="uk-margin">
      <input onChange={handleSearch} className="uk-input" type="text" />
    </div>
    <div className="uk-margin">
      <label>
        <input className="uk-checkbox " type="checkbox" />
        <span className="uk-margin-left">Only show products on stock</span> 
      </label>
    </div>
  </div>
);

export default SearchBar;