import React from 'react';
import './SearchBar.css';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar-container">
      <h3>Search</h3>
      <input
        value={search.searchWord}
        onChange={(e) => setSearch({ ...search, searchWord: e.target.value })}
        className="text-input"
        type="text"
      />
      <div className="checkbox-container">
        <input
          onClick={() =>
            setSearch({
              ...search,
              searchOnlyStocked: !search.searchOnlyStocked,
            })
          }
          className="checkbox-input"
          type="checkbox"
        />
        <span>Only show products on stock</span>
      </div>
    </div>
  );
};

export default SearchBar;
