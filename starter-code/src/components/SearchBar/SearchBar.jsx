import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  constructor() {
    super() 
  
  }

  render(){
    return(
      <input className="search-bar" type="text" name="searchBar" placeholder="Search" defaultValue="" onChange={this.props.onChange} />
    )
  }

}

export default SearchBar