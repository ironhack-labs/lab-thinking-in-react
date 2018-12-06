import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';



class SearchBar extends Component {
  
    render () {

        return (
            <form>
                <input type="text" placeholder="Search..." value="0" ref="filterTextInput"onChange="0"/><p>
                <input type="checkbox" checked="" ref="inStockOnlyInput" onChange="0"/>Only show products in stock</p>
            </form>
        )
    };
}
  export default SearchBar;     