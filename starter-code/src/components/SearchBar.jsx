import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <>
        <div className="form-group">
          <label htmlFor="">Search</label>
          <input
            type="text"
            name="search"
            id="search"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input type="checkbox" />
          <label htmlFor="checkbox">Only show products in stock</label>
        </div>
      </>
    );
  }
}
