import React, { Component } from 'react';

const SearchBar = (props) => {
  //console.log(props.triggerSetQuery);
  const handleChange = (event) => {
    //console.log(event.target.value);
    //console.log(props.query);
    props.triggerSetQuery(event.target.value);
  };
  const boom = (event) => {
    //console.log(event.target);
    props.click();
  };
  return (
    <div>
      <p>Search</p>
      <input
        type="text"
        name="query"
        placeholder="search"
        onChange={handleChange}
        value={props.query}
      ></input>
      <br />
      <input type="checkBox" onChange={boom}></input>
      <label>Only show products on stock</label>
    </div>
  );
};

export default SearchBar;
