import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>  
                <h4>Search</h4>
                <input type="text"></input>
                
                <input type="checkbox"></input>
                <label>Only show products on stock</label>
            </div>
        )
    }
}
