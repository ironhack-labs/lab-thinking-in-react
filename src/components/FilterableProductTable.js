import React, { Component } from 'react'
import ProductTable from './ProductTable/ProductTable'
import SearchBar from './SearchBar/SearchBar'

export default class FilterableProductTable extends Component {

    state = {
        query: '',
        inStock: false
    }

    setQuery = (query) => {
        this.setState({
            query: query
        })
    }

    setInStock = (boolean) => {
        this.setState({
            inStock: boolean
        })

    }
    
    render() {
        //console.log(this.props.products)
        return (
            <div>
                <h1>this is the FilterableProductTable</h1>
                <SearchBar 
                    query={this.state.query} 
                    setQuery={this.setQuery} 
                    inStock={this.state.inStock}
                    setInStock={this.setInStock}
                    />

                <ProductTable 
                    products={this.props.products} 
                    query={this.state.query}
                    inStock={this.state.inStock} />
            </div>
        )
    }
}
