import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    input: '',
    products: this.props.products.data,
  };

  filterProductsHandler = (input) => {
    let filtered = this.products.filter((el) => {
      return el.toLowerCase().includes(input.toLowerCase());
    });
    this.setState({ filtered: filtered });
  };

  handleSearch = (event) => {
    this.filterProductsHandler(event.target.value);
    this.setState({ input: event.target.value });
    // console.log("HELLOOOO", event.target.value)
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          onChange={this.handleSearch}
          placeholder="search..."
          value={this.state.input}
        />
      </div>
    );
  }
}

export default SearchBar;
