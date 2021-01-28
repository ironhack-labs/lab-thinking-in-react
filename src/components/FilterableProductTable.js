import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export class FilterableProductTable extends Component {

    state = {
        products: this.props.products
    }

    render() {
        console.log(`Products: ${this.state.products}`)
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar />
                <ProductTable products={this.state.products}/>
            </div>
        )
    }
}

export default FilterableProductTable
