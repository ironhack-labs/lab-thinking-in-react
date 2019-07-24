import React, { Component } from 'react';
import './SearchBar.css';
class SearchBar extends Component {

    handleSearchProduct = (event) => {
        this.props.searchProduct(event.target.value)
    }

    handleProductsInStock = (event) => {
        this.props.productsInStock(event.target.checked)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(event) => this.handleSearchProduct(event)} className="input search-bar" name="search" placeholder="Search" />
                <div className="juntar">
                    <input type="checkbox" onChange={(event) => this.handleProductsInStock(event)} name="products-in-stock" /> <p>{this.props.string}</p>
                </div>
            </div>
        );
    }
}

export default SearchBar;