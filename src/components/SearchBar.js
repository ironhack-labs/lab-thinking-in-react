import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <form>
        <label>Search</label>
        <input
          type="text"
          name="searchQuery"
          placeholder="Browse products..."
          onChange={props.handleChange}
          value={props.searchParam}
        />
      </form>
    </div>
  );
};

export default SearchBar;
