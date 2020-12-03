import React, { Component } from 'react'
import ProductTable from '../ProductTable/ProductTable'
import SearchBar from '../SearchBar/SearchBar'

export default class FilterableProductTable extends Component {
state = {
    products: this.props.products.data,
    searchSt: ""
}

updateSearch = (searchString) => {
    const filteredProducts = this.state.products.filter((el) => {
      return (
        el.name.toLowerCase().includes(searchString.toLowerCase())
      );
    })
    this.setState({
    products: filteredProducts,
    searchST: searchString
    })
}

    render() {
    const productsArray = this.state.products
    console.log(productsArray)
        return (
            <div>
            <h1>IronStore</h1>
                <SearchBar productsArray={productsArray} updateSearch={this.updateSearch} searchST={this.searchST}/>
                <ProductTable productsArray={productsArray}/>
            </div>
        )
    }
}


