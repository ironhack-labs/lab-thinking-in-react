import React, { Component } from 'react';

class SearchBar extends Component {
  
    render () {

        return (
            <form>
                <input className="search" type="text" placeholder="Search..." value="0" ref="filterTextInput"onChange="0"/><p>
                <input type="checkbox" checked="" ref="inStockOnlyInput" onChange="true"/>Only show products in stock</p>
            </form>
        )
    };
}
  export default SearchBar;     