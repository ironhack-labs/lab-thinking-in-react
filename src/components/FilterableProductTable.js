import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';



export default class FilterableProductTable extends Component {

    constructor(props) {
        super()

        this.state = {
            products: props.products
        }
    }

    updateProducts = (updatedProducts) => {
        this.setState({
            products: updatedProducts
        })
    }
    
    render() {
        return (
        <div>
            <h1>IronStore</h1>
            <SearchBar products={this.props.products} update={this.updateProducts}></SearchBar>
            <ProductTable products={this.state.products}></ProductTable>
        </div>
        )
    }
}
