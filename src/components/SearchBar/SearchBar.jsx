import React from 'react';

import './SearchBar.css'

export default function SearchBar({ onChangeSearch, onChangeCheckbox, value }) {
  return (
    <div className="SearchBar">
      <div className="SearchBar-searcher">
        <input value={value} onChange={(e) => onChangeSearch(e.target.value)} placeholder="Search..."/>
      </div>
      <div className="SearchBar-checkbox">
        <input
          type="checkbox"
          onChange={(e) => onChangeCheckbox(e.target.checked)}
        />
        <p>Only show products in stock</p>
      </div>
    </div>
  );
}
