import React, { Component } from 'react';
import '../App.css';
// import SearchBar from './SearchBar';
// import ProductTable from './ProductTable';


class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
       Search
       <form>
          <input type="text" name="filter"  onChange={(e) => this.filter(e)}></input>
       </form>
      </div>
    );
  }
}

export default SearchBar;