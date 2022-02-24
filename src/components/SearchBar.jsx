import React from 'react';

export default function SearchBar({ setQuery, setCheckbox }) {
  const handleSearchChange = e => {
    setQuery(e.target.value);
  };
  const handleCheckChange = e => {
    setCheckbox(e.target.checked);
  };
  return (
    <div>
      <input type="search" onChange={handleSearchChange} />
      <div>
        <input type="checkbox" id="chbx" onChange={handleCheckChange} />
        <label htmlFor="chbx">Only show products in stock</label>
      </div>
    </div>
  );
}
