import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <label>Search</label>
                <input
                    type="text"
                    name="query"
                    value={this.props.query}
                    onChange={(e) => this.props.setQuery(e.target.value)}
                />
                <input
                    type="checkbox"
                    name="inStock"
                    checked={this.props.inStock}
                    onChange={(e) => this.props.setInStock(e.target.checked)}
                />
                <label>Only show products in stock</label>
            </div>
        )
    }
}