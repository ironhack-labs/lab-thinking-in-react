import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      inStock: false,
    };
  }
  handleSearch = (e) => {
    this.setState({ search: e.target.value }, () =>
      this.props.checkProduct(this.state.search, this.state.inStock)
    );
  };

  hadleStock = (e) => {
    this.setState({ inStock: e.target.checked }, () =>
      this.props.checkProduct(this.state.search, this.state.inStock)
    );
  };

  render() {
    return (
      <>
        <input
          type="search"
          value={this.state.search}
          onChange={this.handleSearch}
        />
        <label>
          <input
            type="checkbox"
            value={this.state.inStock}
            onChange={this.hadleStock}
          />
          Only shows products in stock
        </label>
      </>
    );
  }
}

export default SearchBar;
