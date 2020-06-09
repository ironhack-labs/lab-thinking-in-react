import React, { Component } from 'react';
import ProductTable from './ProductTable.js'
import SearchBar from './SearchBar.js'
import { data } from '../data'

class FilterableProductTable extends Component{
    constructor() {
        super()
        this.state = {
          products: data,
          searchfield: ''
        }
        console.log(data)
      }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { products, searchfield } = this.state;
        console.log(`data in render : ${products}`)
        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchfield.toLowerCase());
         })
        return (
            <div className='tl pa2'>
                <h1 className='f1'>IronStore</h1>
                <SearchBar searchChange={this.onSearchChange} />
                    <ProductTable data={filteredProducts} />
            </div>
        );
    }
}

export default FilterableProductTable;
