import React, { Component } from 'react'
import SearchBar from '../searchbar/SearchBar'
import ProductTable from '../producttable/ProductTable'
import data from '../../data.json'

class FilterableProductTable extends Component {

    constructor() {
        super()
        this.state = {
            products: data.data

        }
    }

    searchItem = search => {
        const productsCopy = [...this.state.products]
        //console.log(search)
        const productFiltered = productsCopy.filter(product => product.name.includes(search))
        //console.log(productFiltered)
        this.setState({ products: productFiltered })
    }

    render() {


        return (

            <main>
                <h1>IronStore</h1>
                <SearchBar searchProduct={this.searchItem} />
                <ProductTable />

            </main>
        )
    }
}

export default FilterableProductTable