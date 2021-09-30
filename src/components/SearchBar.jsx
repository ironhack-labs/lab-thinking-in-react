import React from 'react';

const SearchBar = (props) => {
  const changeHandler = (event) => {
    const inputVal = event.target.value;
    const inputValCheckbox = event.target.checked;
    if (inputValCheckbox) {
      props.onSearchInput(inputValCheckbox);
    } else {
      props.onSearchInput(inputVal);
    }
  };

  return (
    <div className="searchbar-wrapper">
      <label htmlFor="searchinput">Search for Items: </label>
      <input onChange={changeHandler} id="searchinput" type="text" />
      <label htmlFor="inStockId">Show only items in stock: </label>
      <input id="inStockId" type="checkbox" onChange={changeHandler} />
    </div>
  );
};

export default SearchBar;
