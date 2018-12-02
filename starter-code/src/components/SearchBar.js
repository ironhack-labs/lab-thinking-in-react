import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component{

  render(){
    return(
      <div className="searchBar">
        <h4>Search Bar</h4>
        <form>
          <input value={this.props.onSearch}
            onChange={event => this.props.changeSearch(event)}
            type="text" name="search" placeholder="Search for..."/>
          
          {/* <div className="check">
            <input checked={this.state.stocked}
              onChange={event => this.genericSynchronize(event)}
              type="checkbox" name="stocked" />
            <label>Only show products in stock</label>
          </div> */}
        </form>
      </div>
    )
  }
}

export default SearchBar;