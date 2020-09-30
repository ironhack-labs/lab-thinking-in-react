import React, { Component } from 'react';
import './searchBar.css'

 
 
class SearchBar extends Component {
    handleChange = event => {
        this.props.search(event.target.value)
    }
    render() {

         return (
            <div className="searchBar">
                <div className="bar-Title">
                    <label >Search </label>
                </div>
                <div className="div-search">
                    <input className="input-search" type="text" name="search" value={this.props.query} onChange={this.handleChange}/>
                </div>
                <div className="stock-check">
                    <input type="checkbox" name="inStock" checked={this.props.inStock} onChange={() => this.props.handleInStock()}/>
                    <label> Only show products on stock</label>
                </div>
            </div>
        )
    }
}

export default SearchBar