import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange = (event) => {
    this.props.handleSearch(event.target.value);
  };
  render() {
    return (
      <form>
        <label htmlFor="name">Search</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.props.search}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="inStock">Only show products in stock</label>
        <input
          type="checkbox"
          name="inStock"
          id="inStock"
          checked={this.props.inStock}
          onChange={this.props.handleCheckbox}
        />
      </form>
    );
  }
}
