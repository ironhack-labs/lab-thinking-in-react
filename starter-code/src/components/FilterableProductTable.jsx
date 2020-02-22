import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
    
    state = {
        products: this.props.products.data,
        newSearch: "",
        boxCheched: false
    };

    searchInput = e => {
        this.setState({ newSearch: e.target.value })
    };

    checkBox = e => {
        // console.log("called")
        this.setState({ boxChecked: e.target.checked })
    }

    filterProducts = () => {
        let filteredProducts = [...this.state.products].filter(product => {
            return product.name.toLowerCase().includes(this.state.newSearch.toLowerCase());
        })
        return filteredProducts
    };

    showOnStock = () => {
        let onStockProducts = [...this.state.products].filter(product => {
            return product.stocked === this.state.boxChecked
        })
        return onStockProducts
    }

    showProducts = () => {
        return this.state.boxChecked ? this.showOnStock() : this.filterProducts()
    }

    render() {


        return (
            <div className="content">
                <SearchBar 
                    searchProduct={this.state.newSearch}
                    handleSearch={this.searchInput}
                    checkOnStock = {this.state.boxChecked}
                    handleCheck={this.checkBox}

                />
                <ProductTable
                    products={this.showProducts()}
                />
            </div>
        )
    }
}

// {
//   "data": [
//     {"category": "Sporting Goods",  "price": "$49.99",    "stocked": true,    "name": "Football"},
//     {"category": "Sporting Goods",  "price": "$9.99",     "stocked": true,    "name": "Baseball"},
//     {"category": "Sporting Goods",  "price": "$29.99",    "stocked": false,   "name": "Basketball"},
//     {"category": "Sporting Goods",  "price": "$199.99",   "stocked": true,    "name": "Tennis Balls"},
//     {"category": "Electronics",     "price": "$99.99",    "stocked": true,    "name": "iPod Touch"},
//     {"category": "Electronics",     "price": "$399.99",   "stocked": false,   "name": "iPhone X"},
//     {"category": "Electronics",     "price": "$199.99",   "stocked": true,    "name": "iPad Mini"},
//     {"category": "Electronics",     "price": "$199.99",   "stocked": true,    "name": "Huawei P10"}
//   ]
// }
