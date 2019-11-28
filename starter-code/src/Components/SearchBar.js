import React, { Component } from 'react';

export default class SearchBar extends Component {
  handlerChange = event => {
    this.props.setQuery(event.target.value);
  };

  handleCheckbox = event => {
    console.log(event.target.checked);
    this.props.setStock(event.target.checked);
  };

  render() {
    return (
      <div>
        <div>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="query"
            id="search"
            value={this.props.query}
            onChange={this.handlerChange}
          />
        </div>
        <div>
          <label htmlFor="onStock">Only show products on stock</label>
          <input
            type="checkbox"
            name="onStock"
            id="onStock"
            checked={this.props.onStock}
            onChange={this.handleCheckbox}
          />
        </div>
      </div>
    );
  }
}
