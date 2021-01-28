import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        search: '',
        stock: false
    }

    handleSearch = e => {
        this.setState({
            search: e.target.value
        })
        this.props.searchProducts(e.target.value)
    }

    handleCheckbox = () => {
        this.setState({
            stock: !this.state.stock
        })
        this.props.showProductsInStock(this.state.stock);
    }

    render() {
        return (
            <div>
                <label>Search for products</label>
                <input type='text' name='search' value={this.state.search} onChange={this.handleSearch} />
                <input type="checkbox" name='stock' value={this.state.stock} onChange={this.handleCheckbox} />
                <label>Only show products in stock</label>
            </div>
        )
    }
}
