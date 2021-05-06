import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div id="seachbar">
            <label htmlFor="search">Search</label>
            <input
                type="text"
                name="search"
                value={this.props.search}
                onChange={this.props.handleChange}
            />
            <label htmlFor="instock">Only show poducts in stock</label>
            <input
                type="checkbox"
                name="instock"
                checked="false"
                // onChange={this.handleInputChange} 
            />
        </div>
        )
    }
}

