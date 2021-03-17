import React, { Component } from 'react'

export class SearchBar extends Component {

    render() {
        return (
            <div>
                <label htmlFor="search">Search</label>
                <input type="text" name="search"/>
            </div>
        )
    }
}

export default SearchBar
