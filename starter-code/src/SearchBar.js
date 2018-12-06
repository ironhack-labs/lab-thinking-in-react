import React, { Component } from 'react';
import './App.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="search">
        <input type="text" value={this.props.searchValue} onChange={this.props.searchChange}/>
        <div>
          <input type="checkbox" onChange={this.props.checkChange}/><label>Only Show Products in Stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;