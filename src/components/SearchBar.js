import { useState } from 'react';

function SearchBar(products) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="searchBar">
      <div className="searchBar">
        <h4>Search</h4>
      </div>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search item"
          className="input"
          //   onChange={searchTerm}
        ></input>
      </div>
      <div className="searchBar">
        <input type="checkbox" id="availableProducts"></input>
        <p>Only show products in stock</p>
      </div>
    </div>
  );
}

export default SearchBar;
