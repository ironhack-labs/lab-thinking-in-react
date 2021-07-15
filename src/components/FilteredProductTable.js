import React, { Component } from 'react'
import './App.css'
import jsondata from '../data.json'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'


class FilterableProductTable extends Component {
    constructor() {
        super()
        this.state = {
            products: jsondata.data
        }
    }

    filterArray = (text) => {
        let searchString = text
        let responseData = this.state.products
        if (searchString.length > 0) {
            responseData = responseData.filter(elm => elm.name.includes(searchString))
        }
        this.setState({ products: responseData })
    }

    //In js functions are first class citizens
    filterArray
    render() {
        return (
            <>
                <h1>IronStore</h1>
                <SearchBar filter={this.filterArray} />
                <br></br>
                <div className="App">
                    <ProductTable products={this.state.products} />
                </div>
            </>
        )
    }
}

export default FilterableProductTable;