import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchAbility } = this.props;
    return (
      <div className="search-container">
        <h5 className="title">Search</h5>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Type a product name"
            onChange={searchAbility}
          />
        </div>
        <div>
          <label className="checkbox">
            <input type="checkbox" />
            Only Show products on stock
          </label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
