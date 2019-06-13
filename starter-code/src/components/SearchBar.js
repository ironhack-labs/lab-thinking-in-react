import React, { Component } from 'react';

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
                <input type="checkbox" onChange={(event) => this.handleProductsInStock(event)} name="products-in-stock" />
            </div>
        );
    }
}

export default SearchBar;