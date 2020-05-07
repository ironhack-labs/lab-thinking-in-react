import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange = (event) => {
    this.props.triggerSetQuery(event.target.value);
  };
  handleStock = (event) => {
    this.props.setFilterStock(event.target.checked);
  };
  render() {
    return (
      <div className="search">
        <label htmlFor="query">Search</label>
        <input
          type="text"
          name="query"
          value={this.props.query}
          onChange={this.handleChange}
        />
        <div>
          <input
            type="checkbox"
            name="stock"
            value={this.props.filterStock}
            onChange={this.handleStock}
          />
          <label htmlFor="stock">Only show products on stock</label>
        </div>
      </div>
    );
  }
}
