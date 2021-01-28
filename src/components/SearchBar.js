import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <label>Search for products</label>
                <input />
                <input type="checkbox" />
                <label>Only show products in stock</label>
            </div>
        )
    }
}
