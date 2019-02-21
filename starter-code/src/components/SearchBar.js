import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
    }
    handleSearch(event){
        this.props.filterProducts(event.target.value);
    }
    handleFilter(event){
        this.props.onlyAvailable(event.target.value)
    }
    render() {
      return (
        <div className="SearchBar">
          <form className="search" onChange={this.handleSearch}>
              <label>Search</label>
              <input type="text" name="search"/>
          </form>
          <form className="search" onChange={this.handleFilter}>
              <div>
                <input type="checkbox"/> Only show products in stock
              </div>
          </form>
        </div>
      );
    }
  }
  
  export default SearchBar;