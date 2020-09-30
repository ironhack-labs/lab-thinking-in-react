import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <div class="search">
      <label>Search</label>
      <input
        className="input"
        type="text"
        placeholder="iPod Touch"
        value={props.search}
        onChange={props.onChange}
      />
      <div>
        <label>in Stock</label>
        <input
          type="checkbox"
          onClick={props.onClick}
          value={props.isFiltered}
        />
      </div>
    </div>
  );
}

export default SearchBar;
