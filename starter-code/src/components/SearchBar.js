import React, { Component } from 'react';

class SearchBar extends Component {
  updateSearch(e) {
    // console.log(e.target.value)
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="SearchBar">
        <h3>Search</h3>
        <input
          type="text"
          placeholder="Search a product"
          id="product"
          onChange={e => this.updateSearch(e)}
        />
      
      <input type="checkbox"></input><span>only show products on stock</span>

    
        
        {/* <input
              type="checkbox"
              // onChange={_ => this.stockProducts()}
              >only show products on stock
              </input>>
             */}
      </div>
    );
  }
}

export default SearchBar;
