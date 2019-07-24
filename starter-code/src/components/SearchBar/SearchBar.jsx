import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Search</p>
        <p><input type="text" name="search" className="searchBar" onChange={(e) => this.props.onChange(e)}/></p>
        <p><input type="checkbox" name="stockOnly" onClick={(e) => this.props.onClick(e)}/><label htmlFor="stockOnly">Only show products in stock</label></p>
      </div>
    )
  }
}

export default SearchBar;