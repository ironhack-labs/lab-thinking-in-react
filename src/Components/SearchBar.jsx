import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    return (
      <div>
        <form>
          <input type="text" placeholder="Search.." value={filterText}/>
          <p>
            <input type="checkbox" 
            />
            {''}
            Only show products in stock
          </p>
        </form>
      </div>
    );
  }
}

export default SearchBar;
