import React, { Component } from 'react';

export default class SearchBar extends Component {

    render() {
        return (
            <div>
                <input placeholder='search' type="text"/>
                <label >Only show products in stock</label>
                <input type="checkbox"/>
            </div>
        )
    }
} 