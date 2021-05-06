import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import '../App.css';


export default class FilterableProductTable extends Component {
    
    
    state = {
        searchQuery: '',
        onlyInStock: false,
    }

    setQuery = (field, value) => {
        this.setState({
            [field]: value,
        })
    }
    
    render() {
        return (
            <>
                <SearchBar setQuery={this.setQuery} query={this.state.searchQuery}/>
                <ProductTable products={this.props.products.data} onlyInStock={this.state.onlyInStock} searchQuery={this.state.searchQuery}/>
            </>
        )
    }
}
