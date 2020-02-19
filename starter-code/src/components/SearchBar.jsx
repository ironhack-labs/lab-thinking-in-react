import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <label htmlFor="search">Search</label>
        <input className="bar" type="text" />
        <div className="checkbox-stock">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Only show products on stock</label>
        </div>
      </div>
    );
  }
}
