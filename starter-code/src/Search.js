import React, { Component } from 'react'
import './Search.css';

export default class Search extends Component {
    render() {
        return (
            <div>
                <p>Search</p>
                <input type="text" placeholder="filter products" onChange={(e) => this.props.filterProducts(e)} value={this.props.filterQuery} className="search-input"></input>
                <p><input type="checkbox" onChange={(e) => this.props.checkVerified(e)}></input>Only show products on stock</p>
            </div>
        )
    }
}