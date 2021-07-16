import React, { Component } from 'react'
import SearchBar from './SearchBar.js'
import ProductTable from './ProductTable'
import '../App.css'

export default class FilterableProductTable extends Component {

    state = {
        query: '',
        inStockProducts: true,
        products: this.props.products
    }

    setQuery = query => {
        this.setState({
          query: query
        })
    }
    
    render() {
        return (
            <>
                <h1> Products & Prices</h1>

                <SearchBar
                    query={this.state.query}
                    setQuery={this.setQuery}
                />

                <ProductTable
                    products={this.state.products}
                    query={this.state.query}
                />

            </> 
        )
    }
}