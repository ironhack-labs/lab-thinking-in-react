import React, { Component } from 'react';

import './SearchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <form id="search-bar-form" className="row">
        <div className="mb-3 col-12 px-0">
          <h4 htmlFor="search" className="form-label">
            Search
          </h4>
          <input type="text" className="form-control" id="search" />
        </div>
        <div className="form-check col-4 m-auto">
          <input
            className="form-check-input mx-0"
            type="checkbox"
            value=""
            id="stock-products"
          />
          <label className="form-check-label" htmlFor="stock-products">
            Only show products on stock
          </label>
        </div>
      </form>
    );
  }
}
