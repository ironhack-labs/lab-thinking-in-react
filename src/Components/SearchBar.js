import React, { Component } from 'react';

var SearchBar = (props) => {
    return (
      <div className="search-bar">
      Search
        <input
          className="search-input"
          type="text"
          onChange={props.callback}
          placeholder="Search..."
        />
        <div>
        <input type="checkbox" id="instock" name="instock" onClick={props.stock}/>
        <label htmlFor="instock">Only show products in stock</label>
        </div>
      </div>
    );
  }


export default SearchBar;
