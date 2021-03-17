import React, { Component } from 'react'

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export class FilterableProductTable extends Component {
    render() {
        state = {
            products: products,
        }
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar/>
                <ProductTable products = {this.state.products}/>
            </div>
        )
    }
}

export default FilterableProductTable
