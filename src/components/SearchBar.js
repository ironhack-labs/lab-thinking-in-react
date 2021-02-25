import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <p>Search</p>
                <input type="text"/>
                <input type="checkbox" name="" id=""/><label htmlFor="">Only show products on stock</label>
            </div>
        )
    }
}
