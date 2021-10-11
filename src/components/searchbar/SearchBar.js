import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          name="searchInput"
          onChange={(event) =>
            this.props.onSearchQueryChange(event.target.value)
          }
          placeholder="Search..."
        />
        <br />
        <label>Only show products on stock</label>
        <input
          type="checkbox"
          onChange={(event) => {
            this.props.onCheckboxInStockChange(event.target.checked);
          }}
        />
      </div>
    );
  }
}
