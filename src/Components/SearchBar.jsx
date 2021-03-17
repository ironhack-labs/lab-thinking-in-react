import React, { Component } from 'react'
import '../Styles/SearchBar.css'

export class SearchBar extends Component {
    render() {
        return (
            <div id="search-bar">
                <label htmlFor="search">Search</label>
                <input
                id="search"
                type="text"
                name="search"
                />
            </div>
        )
    }
}

export default SearchBar
