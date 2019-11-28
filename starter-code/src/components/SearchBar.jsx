import React, { Component } from 'react';

export default class SearchBar extends Component {



  render() {
      console.log(this.props.query);
    return (
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="query"
          id="search"
          value={this.props.query}
          onChange={this.props.setSearch}
        />
        <input
          type="checkbox"
          name="stock"
          id="stock"
          value={this.props.stock}
          onChange={this.props.setSearch}
        />
        <label htmlFor="stock">Only show products on stock</label>
      </div>
    );
  }
}
