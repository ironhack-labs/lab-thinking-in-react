import React from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
  return (
    <div className="searchbar">
      <label>Search</label>
      <input
        type="text"
        name="query"
        value={props.query}
        onChange={(e) => {
          props.setQuery(e.target.value);
        }}
      />
      <label>
        <input
          type="checkbox"
          name="inStock"
          checked={props.inStock}
          onChange={(e) => {
            props.setInStock(e.target.checked);
          }}
        />
        Only show products on stock
      </label>
    </div>
  );
}
