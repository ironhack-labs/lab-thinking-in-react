import React, { Component } from 'react'
import data from './data.json'
import './App.css'
// import FilterableProductTable from './components/ProductTable'
import ProductTable from './components/ProductTable'
import SearchBar from "./components/SerarchBar"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data.data,
            dataCopy: data.data
        }
    }
    searchProduct = (placeHolder, stock) => {
        let productCopy = [...this.state.data]
        productCopy = productCopy.filter(elm => elm.name.includes(placeHolder))
        if (stock)
            (productCopy = productCopy.filter(elm => elm.stocked === (stock)))
        this.setState({ dataCopy: productCopy })
    }
    render() {
        return (
            <>
                <h1>IronStore</h1>
                <SearchBar data={this.state.dataCopy} searchItem={this.searchProduct} />
                <ProductTable data={this.state.dataCopy} />
            </>
        )
    }
}


export default App