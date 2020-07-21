import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <label>Search</label>
        <input
          type="text"
          name="searchQuery"
          //value={''}
          placeholder="Browse products..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
