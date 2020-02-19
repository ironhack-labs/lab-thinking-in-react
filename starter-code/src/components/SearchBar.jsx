import React from 'react';

export default function SearchBar({ searchFilter, onStockFilter }) {
  return (
    <>
      <label htmlFor="search">Search </label>
      <input
        type="text"
        className="search"
        id="search"
        onChange={searchFilter}
      />
      <hr />
      <label htmlFor="onStock">Only show products on stock </label>
      <input
        type="checkbox"
        value=""
        className="onStock"
        id="onStock"
        onChange={onStockFilter}
      />
    </>
  );
}
