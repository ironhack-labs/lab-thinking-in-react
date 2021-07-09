import React from 'react';

const SearchBar = ({ handleSearch, isChecked, handleIsChecked }) => {
  return (
    <section>
      <h3>Search</h3>
      <div>
        <input type="text" onChange={handleSearch} />
      </div>
      <div>
        <label>
          <input type="radio" checked={isChecked} onChange={handleIsChecked} />
          <span>Only show products on stock</span>
        </label>
      </div>
    </section>
  );
};
export default SearchBar;
