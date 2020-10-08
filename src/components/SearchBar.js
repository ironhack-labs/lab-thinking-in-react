import React, { Component } from 'react';

class SearchBar extends Component {
  handleSearch = (event) => {
    this.props.searchBar(event.target.value);
    console.log(this.props.searchBar);
  };

  render() {
    return (
      <>
        <h3>Search</h3>
        <input
          classNote="search-principal"
          type="text"
          placeholder="Search:"
          onChange={this.handleSearch}
        />
        <input
          type="checkbox"
          name="stocked"
          checked={this.props.checked}
          onChange={this.props.filterByStock}
        />
      </>
    );
  }
}

export default SearchBar;
