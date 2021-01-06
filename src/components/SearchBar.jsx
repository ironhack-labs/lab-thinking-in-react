import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <form className="form">
        <input
          className="search"
          name="search"
          type="search"
          placeholder="Search..."
          onChange={this.props.handleSearch}
        />
        <div>
          <label htmlFor="check">Only show products in stock</label>
          <input
            type="checkbox"
            name="checkbox"
            onChange={this.props.handleCheck}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
