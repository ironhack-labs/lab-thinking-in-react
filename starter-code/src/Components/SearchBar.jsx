import React from 'react';

const SearchBar = ({ filter, isChecked, change }) => {
  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    change(name, type === 'checkbox' ? checked : value);
  };
  return (
    <>
      <h2>Search</h2>
      <input type="text" value={filter} onChange={handleChange} name="filter" />
      <br />
      <input
        type="checkbox"
        name="isChecked"
        value={isChecked}
        onChange={handleChange}
      />
      <label htmlFor="isChecked">Only show products on stock</label>
    </>
  );
};

export default SearchBar;
