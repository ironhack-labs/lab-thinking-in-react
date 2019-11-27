import React from 'react';

export default function SearchBar({ clbk }) {
  return (
    <div className="foo">
      <div className="search-bar">
        <p>Search</p>
        <input
          className="input-group input"
          type="text"
          onChange={clbk}
          placeholder="search..."
        />
      </div>

      <div className="checkbox">
        <input type="checkbox" id="filter" />
        <label htmlFor="filter">Only Show Products on stock</label>
      </div>
    </div>
  );
}
