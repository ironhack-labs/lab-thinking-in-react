import React from 'react';

export default function SearchBar() {
  return (
    <div className="search-bar flex column center">
      <p>Search</p>
      <input type="text" name="" id="" />
      <div>
        <input type="checkbox" checked="false" />
        <span>Only show products on stock</span>
      </div>
    </div>
  );
}
