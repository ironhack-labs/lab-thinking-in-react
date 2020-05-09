import React, { Component, Fragment } from 'react';

export default class SearchBar extends Component {
  handleSearch = (event) => {
    this.props.handleSearch(event.target.value);
  };
  handleCheck = (event) => {
    this.props.handleCheck(event.target.checked);
  };

  render() {
    return (
      <div className="search-box">
        <label htmlFor="">Search</label>
        <input
          type="text"
          name="search"
          value={this.props.search}
          onChange={this.handleSearch}
        />

        <label htmlFor="">Only Show Products on Stock</label>
        <input
          type="checkbox"
          name="search"
          checked={this.props.checked}
          onChange={this.handleCheck}
        />
      </div>
    );
  }
}
