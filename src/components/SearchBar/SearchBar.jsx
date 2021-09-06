import React from 'react';

export default function SearchBar({ onChangeInput, value }) {
  return (
    <div className="SearchBar">
      <div className="SearchBar-searcher">
        <input value={value} onChange={(e) => onChangeInput(e.target.value)} />
      </div>
      <div className="SearchBar-checkbox">
        <input type="checkbox" />
        <p>Only show products in stock</p>
      </div>
    </div>
  );
}
