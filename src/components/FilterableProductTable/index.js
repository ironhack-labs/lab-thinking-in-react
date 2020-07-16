import React, { Component } from 'react'

import ProducTable from './ProductTable'
import SearchBar from './SearchBar'

import products from '../../data.json'

class FilterableProductTable extends Component {
    constructor() {
        super()
        this.state = {
            products: products.data,
            filteredProducts: products.data
        }
    }

    filterProducts = word => {
        const productsCopy = [...this.state.products]
        const productsCopyFiltered = productsCopy.filter(elm => elm.name.toLowerCase().includes(word.toLowerCase()))
        this.setState({ filteredProducts: productsCopyFiltered })
    }

    render() {
        return (
            <main>
                <h1>IronStore</h1>
                <SearchBar filterProducts={this.filterProducts} />
                <ProducTable filteredProducts={this.state.filteredProducts} />
            </main>
        )
    }
}

export default FilterableProductTable 