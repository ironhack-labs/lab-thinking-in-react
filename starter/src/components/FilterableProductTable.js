import React, { Component } from 'react';

import products from '../data.json'
import SearchBar from './SearchBar';
import { ProductTable } from './ProductTable';

export class FilterableProductTable extends Component {
    constructor() {
        super()
        this.state = { 
            category: products.data.category,
            products: products.data
        }
    }

    currentState(input) {
        
         let filt = products.data.filter(e => {
            return (e.name.includes(input));
        })

        console.log(filt, 'filtrado');
        
        
        this.setState({products:filt})
        console.log(this.state.products, 'estado acutal');
    }

    render() {
        return (
            <div>
                <SearchBar currentState={e => this.currentState(e)}/>
                <ProductTable products={this.state.products}/>
            </div>
        )
    }
} 