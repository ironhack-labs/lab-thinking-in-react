import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    this.props.searchProducts(event.target.value);
  };
  render() {
    return (
      <div className="container mt-3">
        <input
          className="form-control form-control-lg "
          placeholder="Search"
          type="text"
          name="query"
          ue={this.props.query}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

export default SearchBar;
