/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../App.css';

const SearchBar = props => {
  return (
    <div>
      <h2>Search</h2>
      <input
        name="serch"
        className="input"
        value={props.search}
        className="input"
        type="text"
        placeholder="Find a repository"
        onChange={e => props.searchProducts(e)}
      />
        <input onChange={props.checkedProducts} type='checkbox' />Only products in stock
    </div>
  );
};

export default SearchBar;
