import React from 'react';

function SearchBar(props) {
  const { searchword, handleSearch, handleInStock } = props;
  return (
    <div>
      <label htmlFor="">
        Search
        <input
          name="searchBar"
          value={searchword}
          type="text"
          onChange={(event) => handleSearch(event)}
        />
      </label>

      <label htmlFor="">
        In stock
        <input
          type="checkbox"
          name="checkbox"
          onClick={(event) => handleInStock(event)}
        />
      </label>
    </div>
  );
}

export default SearchBar;
