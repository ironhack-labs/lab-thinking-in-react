import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products.data,
            filteredProducts: props.products.data
        }
    }

    searchFilter = ({search, showInStock}) => {
        this.setState((state) => ({
            filteredProducts: state.products.filter(item => 
                (showInStock || item.stocked) 
                && item.name.toLowerCase().includes(search.toLowerCase())
            )
        }))
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar onSubmit={this.searchFilter}/>
                <ProductTable products={this.state.filteredProducts} />
            </div>
        )
    }
}
