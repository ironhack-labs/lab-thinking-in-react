import React from 'react';

export default function SearchBar({ clbk }) {
  return (
    <div class="search-bar container">
      <input type="text" onChange={clbk} />
      <label htmlFor="filter">Only Show Products on stock</label>
      <input type="checkbox" id="filter" />
    </div>
  );
}
