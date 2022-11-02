import React from 'react';

function SearchBar({
  handleChangeSearch,
  searchValue,
  inStock,
  handleChangeInStock,
}) {
  return (
    <div>
      <input
        name="search"
        type="text"
        className='input'
        value={searchValue}
        onChange={handleChangeSearch}
        placeholder="Search..."
      />
      <br />
      <label>
        <input
          type="checkbox"
          className='checkbox'
          checked={inStock}
          onChange={handleChangeInStock}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
