import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import ProductTable from '../components/ProductTable'


export default class FilterableProductTable extends Component {
    state = {
      productsFiltered : this.props.products
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar />
                <ProductTable products={this.state.productsFiltered}/>
            </div>
        )
    }
}
