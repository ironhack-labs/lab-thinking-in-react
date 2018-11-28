import React, { Component } from 'react';

/* Importing Database */
import Data from '../data.json'


class SearchBar extends Component {
  constructor(props) {
    super(props)

  }

  searchData(query) {
    
  }

  render() {
    return (
      <div className="search">
        <input type="text"/>
        <input type="radio" value="true"/>
      </div>
    )
  }
}

export default SearchBar;