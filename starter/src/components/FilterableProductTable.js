import React, { Component } from 'react';

import products from '../data.json'
import SearchBar from './SearchBar';
import { ProductTable } from './ProductTable';

export default class FilterableProductTable extends Component {
    constructor() {
        super()
        this.state = { products: products}
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <ProductTable products={this.state.products}/>
            </div>
        )
    }
} 