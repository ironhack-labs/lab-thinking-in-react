import React from 'react';

function SearchBar(props) {
  const handleSearchInput = (e) => {
    e.preventDefault();
    props.handleSearch(e.target.value.toLowerCase());
  };

  const handleCheckbox = () => {
    const filterInStock = document.getElementById('checkbox').checked;
    props.inStock(filterInStock);
  };

  return (
    <div className="searchBar">
      <h2 className="subtitle">Search Bar</h2>
      <input
        className="searchField"
        type="text"
        onChange={handleSearchInput}
        placeholder="Enter your search term here"
      />

      <input
        className="checkbox"
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onChange={handleCheckbox}
      ></input>
      <label>Show IN STOCK products only</label>
    </div>
  );
}

export default SearchBar;
