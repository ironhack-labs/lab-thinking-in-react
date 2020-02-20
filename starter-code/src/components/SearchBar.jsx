import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange = event => {
    event.preventDefault();

    this.props.searchProducts(event.target.value);
    console.log(this);
  };

  render() {
    console.log('Search bar: ', this.props);
    return (
      <div>
        <h3>Search</h3>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            name="search"
            value={this.props.searchText}
          ></input>
        </form>
        <br />
        <input type="checkbox" /> Only show products in stock
      </div>
    );
  }
}
