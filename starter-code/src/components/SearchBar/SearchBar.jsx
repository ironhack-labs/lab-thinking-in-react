import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form>
          <div className="input-field col s6">
            <input
              onChange={e => this.props.updateSearch(e.target.value)}
              type="text"
              name="search"
              id="search"
              placeholder="Search products"
            />
          </div>
        </form>
        {/* <label htmlFor="search">Search</label> */}

        <label>
          <input
            onChange={e => this.props.updateInStock(e.target.checked)}
            type="checkbox"
            name="in-stock"
            id="in-stock"
          />
          <span>Only show products in stock</span>
        </label>
        {/* <label htmlFor="in-stock">Only show products in stock</label> */}
      </div>
    );
  }
}
