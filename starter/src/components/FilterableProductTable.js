import React, { Component } from 'react';

import products from '../data.json'
import SearchBar from './SearchBar';
import { ProductTable } from './ProductTable';

export class FilterableProductTable extends Component {
    constructor() {
        super()
        this.state = { products: products}
    }

    render() {
        return (
            <div>
                <SearchBar currentState={this.state}/>
                <ProductTable products={this.state.products}/>
            </div>
        )
    }
} 