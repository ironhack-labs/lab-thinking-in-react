import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    
    state = {
        query: '',
        stock: false
    }

    handleSearch = queryParam => {
        this.setState({
            query: queryParam
        })
    }

    handleStock = check => {
        this.setState({
            stock: check
        })
    }
    
    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar query={this.state.query} handleSearch={this.handleSearch} stock={this.state.stock} handleStock={this.handleStock}/>
                <ProductTable products={this.props.products} query={this.state.query} stock={this.state.stock}/>
            </div>
        )
    }
}
