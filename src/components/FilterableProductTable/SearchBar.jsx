import React from 'react';

const checkboxHandler = (event) => {
  // console.log(event.target.checked)
};

function SearchBar({filterSearch}) {
    const searchHandler = (event) => {
      filterSearch(event.target.value)
    };
  
    return (
      <div>
        <label>Search</label>
        <input
          name="search"
          type="text"
          placeholder="Search product..."
          onChange={searchHandler}
        />
        <label>Only show products on stock</label>
        <input name="checkbox" type="checkbox" onChange={checkboxHandler} />
      </div>
    );
  }
  
  export default SearchBar;
  