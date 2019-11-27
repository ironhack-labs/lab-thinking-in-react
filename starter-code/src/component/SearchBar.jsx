import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <label className="SearchBar"></label>
        <input id="Searchbar" className="input" type="text" name="products" />
      </div>
    );
  }
}

export default SearchBar;
