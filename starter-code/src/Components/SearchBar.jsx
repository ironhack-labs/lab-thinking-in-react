import React from 'react';

export default function SearchBar({ handleChangeTextField, searchFieldValue }) {
  return (
    <div>
      <label>
        Search
        <br />
        <input
          type="search"
          name="searchField"
          value={searchFieldValue}
          onChange={handleChangeTextField}
        />
      </label>
      <label>
        <br />
        <input type="checkbox" name="" />
        only show products on stock
      </label>
      <hr />
    </div>
  );
}
