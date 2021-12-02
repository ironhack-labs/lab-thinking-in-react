import React, { Component } from 'react'
import Searchbar from './SearchBar'
import ProductTable from './ProductTable '

export default class extends Component {

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <Searchbar />
                <ProductTable products={this.props.products} />
            </div>
        )
    }
}
