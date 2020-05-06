import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <label htmlFor="search" className="title">
          Search
        </label>
        <input
          id="search"
          name="search"
          type="text"
          onChange={this.props.callback}
          value={this.props.search}
        />
        <div className="checking">
          <input
            id="onlyStock"
            name="onlyStock"
            type="checkbox"
            onClick={this.props.callback}
          />
          <label htmlFor="onlyStock">Only show products on stock</label>
        </div>
      </form>
    );
  }
}

export default SearchBar;
