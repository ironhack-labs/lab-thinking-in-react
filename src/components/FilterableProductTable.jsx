import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {

    state = {
        inputText: ""
    }

    searchProduct = (value) => {
        this.setState({inputText: value})
    }

    render() {
        console.log()
        return (
            <div>
                <h1>Iron Store</h1>
                <SearchBar searchProduct={this.searchProduct} renderValue={this.state.inputText}/>  
                <ProductTable renderValue={this.state.inputText}/>
            </div>
        )
    }
}
