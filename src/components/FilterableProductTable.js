import React from 'react'
import { Component } from 'react'
import ProductTable from './ProductTable'


class FilterableProductTable extends Component {

    constructor() {
        super()
        this.state = { 
            products: [],
         }
    }
    loadProducts(){
        this.setState({products: this.props.products})
    }


    render() {
        return (
            <>
                {/* <SearchBar /> */}
                <ProductTable />
                {/* <ProductRow />  */}
            </>
        )
    }
}

export default FilterableProductTable