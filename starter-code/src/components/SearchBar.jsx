import React, { Component } from 'react';

export default function Search({ searchClbk, checkClbk }) {
  return (
    <div>
      <label htmlFor="search">
        Search
        <input
          onChange={searchClbk}
          name="search"
          type="text"
          placeholder="Search..."
        />
      </label>
      <label htmlFor="checkbox">
        In Stock
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={checkClbk}
        />
      </label>
    </div>
  );
}
