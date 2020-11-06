import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  handleProductSearch = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.props.filterProducts(this.state.searchTerm);
    });
  };

  render() {
    return (
      <div className="SearchBar">
        <h3>Search</h3>
        <input
          type="text"
          name="searchTerm"
          placeholder="Product Search"
          value={this.state.searchTerm}
          onChange={(event) => this.handleProductSearch(event)}
        ></input>
      </div>
    );
  }
}

export default SearchBar;
