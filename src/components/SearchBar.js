import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        search: ''
    }

    handleSearch = e => {
        this.setState({
            search: e.target.value
        })
        this.props.searchProducts(e.target.value)
    }

    render() {
        return (
            <div>
                <label>Search for products</label>
                <input name='search' type='text' value={this.state.search} onChange={this.handleSearch} />
                <input type="checkbox" />
                <label>Only show products in stock</label>
            </div>
        )
    }
}
