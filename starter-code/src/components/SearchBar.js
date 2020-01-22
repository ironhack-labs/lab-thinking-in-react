import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="searchForm">
        <form>
          <label htmlFor="search">Search</label>
          <input type="text" name="search" onChange={this.props.searchFunction}/>
          <input type="checkbox" name="stockFilter" onChange={this.props.filterFunction}/>
          <label htmlFor="stockFilter">Only show products on stock</label>
        </form>
      </div>
    )
  }

}

export default SearchBar;