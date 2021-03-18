import React, { Component } from 'react'
import '../styles/SearchBar.css'

export class SearchBar extends Component {

    
    handleSearch = (event) => {
        this.props.onSearchValue(event.target.value)
    }
    
    render() {
        const filterText = this.props.search;

        return (
          <form onSubmit={this.SubmitSearch} className="SearchBar">
            <input
              type="text"
              value={filterText}
              onChange={this.handleSearch}
              placeholder="Search your product"
            />
          </form>
        );
    }
}

export default SearchBar
