import React, { Component } from 'react';
import '../styles/SearchBar.css'

export default class SearchBar extends Component {

  state = {
    search: ""
  }

  filteredSearch = (evt) => {
    let searchValue = evt.target.value
    this.setState({search: `${searchValue}`})
    this.props.filterProducts(searchValue)
  }


    render() {
      return (
        <div className="search-bar">
            <label>Search</label>
            <input type="search" id="site-search" placeholder="Search ..." onChange={this.filteredSearch}></input>
        </div>
      );
    }
  }