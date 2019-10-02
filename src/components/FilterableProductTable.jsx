import React, { Component } from 'react'
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"
import './FilterableProductTable.css'

class FilterableProductTable extends Component {
    state = {
        filteredProducts: this.props.products,
        inStockOnly: false
    }

    toggleInStock = (cb) => {
        this.setState({
            inStockOnly: !this.state.inStockOnly
        }, cb)
    }

    filterProducts = (filterString) => {
        let filteredProducts = [...this.props.products].filter(p => this.state.inStockOnly ? p.stocked : true)
        this.setState({
            filteredProducts: (filterString.length) ? filteredProducts.filter(p => p.name.toLowerCase().includes(filterString.toLowerCase())) : filteredProducts
        })
    }

    render() {
        return (
            <div className="main-content">
                <SearchBar toggleInStock={this.toggleInStock} onFilterChange={this.filterProducts} />
                <ProductTable products={this.state.filteredProducts} />
            </div>
        )
    }
}

export default FilterableProductTable
