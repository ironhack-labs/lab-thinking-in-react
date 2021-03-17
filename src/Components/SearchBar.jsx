import React, { Component } from 'react'
import '../styles/SearchBar.css'

export class SearchBar extends Component {
    // state = {
    //     inStock: false,
    // }

    handleSearch = (event) => {    
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        this.props.search(value)
    }
    
    render() {
        

        
        return (
                <div className="search-bar">
                <input onChange={this.handleSearch} type="text" name="search" id="search"/>
                <div>
                <input onChange={this.handleSearch}type="checkbox" name="inStock" id="inStock"/>
                <label htmlFor="inStock">Only show products in stock</label>
                </div>
                </div>
        )
    }
}

export default SearchBar
