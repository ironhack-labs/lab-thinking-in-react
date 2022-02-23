import React from 'react';

function SearchBar(props) {
  const handleSearchInput = (e) => {
    e.preventDefault();
    props.handleSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="searchBar">
      <h2>Search Bar</h2>
      <input
        className="searchField"
        type="text"
        onChange={handleSearchInput}
        placeholder="Enter your search term here"
      />
    </div>
  );
}

export default SearchBar;
