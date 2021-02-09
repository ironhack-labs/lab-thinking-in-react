import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchInput: '',
  };

  handleSearch = (event) => {
    const value = event.target.value;

    this.setState({
      searchInput: value,
    });
    this.props.filterProducts(value);
  };

  render() {
    return (
      <div className="m-3">
        <input
          className="form-control"
          type="text"
          name="search"
          value={this.state.searchInput}
          onChange={this.handleSearch}
          placeholder="Filter Products"
        />
      </div>
    );
  }
}
