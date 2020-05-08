import React, { Component } from 'react';
import '../components/SB.css';

class SearchBar extends Component {
  formChange = (event) => {
    // input value of search field gets passed to parent 'FilterableProductTable' as return value via 'update' prop
    this.props.update(event.target.value);
  };

  render() {
    return (
      <form className="searchBar" onChange={this.formChange}>
        <label>Search:</label>
        <input type="search" name="product-search" />
        <input type="checkbox" />
      </form>
    );
  }
}

export default SearchBar;
