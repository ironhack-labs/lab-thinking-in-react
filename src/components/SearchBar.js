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
        <label>
          <input type="checkbox" onChange={props.handleFilter} />
          Show products in stock only
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
