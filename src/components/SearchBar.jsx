import React from 'react';

const SearchBar = (props) => {
  const searchChangeHandler = (event) => {
    const inputVal = event.target.value;
    props.onSearchInput(inputVal);
  };
  const checkboxChangeHandler = (event) => {
    const inputVal = event.target.checked;
    props.onCheckboxInput(inputVal);
  };

  return (
    <div className="searchbar-wrapper">
      <label htmlFor="searchinput">Search for Items: </label>
      <input onChange={searchChangeHandler} id="searchinput" type="text" />
      <label htmlFor="inStockId">Show only items in stock: </label>
      <input id="inStockId" type="checkbox" onChange={checkboxChangeHandler} />
    </div>
  );
};

export default SearchBar;
