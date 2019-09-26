import React, { Component } from 'react';

export default class Search extends Component {
  handleChange = event => {
    const { value } = event.target;
    console.log(value);
    this.props.handleQuery(value);
  };

  render() {
    return (
      <form>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="search"
          value={this.props.query}
          onChange={this.handleChange}
        />
        <label htmlFor="inStock">Only show products on stock</label>
        <input
          type="checkbox"
          name="inStock"
          id="inStock"
          value={this.props.checked}
          onChange={this.props.checkHandle}
        />
      </form>
    );
  }
}
