// SearchBar.js

import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <label>Search</label>
        <input type="text" onChange={this.props.handleData} />
        <div>
          <label>Only show products on stock</label>
          <input type="checkbox" onClick={this.props.showOnStock}/>
        </div>

      </div>
    );
  }
}

export default SearchBar;
