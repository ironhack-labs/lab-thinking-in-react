import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <label>Search</label>

                <input type="search" name="searchBox"></input>

                <input type="checkbox" name="check"/>Only show products on stock
            </div>
        )
    }
}
