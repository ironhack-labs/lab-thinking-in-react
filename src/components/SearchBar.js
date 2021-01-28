import React, { Component } from 'react';
import 'bulma/css/bulma.css';

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
                <input className='input is-info' type='text' name='search' value={this.state.search} onChange={this.handleSearch} placeholder='Search products' />
                <input type="checkbox" name='stock' value={this.state.stock} onChange={this.handleCheckbox} />
                <label for='checkbox' className='content is-normal'> Only show products in stock</label>
            </div>
        )
    }
}
