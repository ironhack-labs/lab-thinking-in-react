import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  const onSearchInputChange = (event) => {
    props.onSearchChange(event.target.value);
  };

  const checkBoxChangeHandler = (event) => {
    //console.log(event.target.checked);
    props.onCheckBoxChange(event.target.checked);
  };

  return (
    <div className="SearchBar__main">
      <h2>Search</h2>
      <input
        onChange={onSearchInputChange}
        value={props.searchTermValue}
        type="text"
        placeholder="type here"
      />
      <input
        onChange={checkBoxChangeHandler}
        type="checkbox"
        id="onlyInStock"
      />
      <label htmlFor="onlyInStock">Only show produts on stock</label>
    </div>
  );
};

export default SearchBar;
