import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const filterInput = props.filterInput;
  console.log(filterInput);

  return (
    <form className="searchContainer" action="">
      <label htmlFor="">Search</label>
      <input
        type="text"
        value={filterInput}
        onChange={(e) => props.updatedInput(e.target.value)}
        placeholder="Type any product"
      />
    </form>
  );
}

export default SearchBar;
