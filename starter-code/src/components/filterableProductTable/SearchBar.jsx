import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="search">
        <h2>Search</h2>
        <input
          type="text"
          className="input search-bar"
          placeholder="Search a product"
          onChange={(e) => this.props.findProducts(e)}
        />

        <input type="checkbox" name="stocked" />
        <label htmlFor="stocked">Only show products on stock</label>
      </div>
    );
  }
}
