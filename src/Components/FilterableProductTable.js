import React from 'react'
import { Component } from 'react'

import './ProductTable.css'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


class FilterableProductTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
        products: this.props.products,
        searchValue: '',
        showOnlyStocked: false
        }
    }

    searchProduct(value) {
        this.setState({
            searchValue: value
        })
    }

    toggleStock() {
        this.setState({
            showOnlyStocked: !this.state.showOnlyStocked
        })
    }
  
    render() {
        let productsToShow = this.state.products.filter(elm => elm.name.includes(this.state.searchValue) )
        productsToShow = this.state.showOnlyStocked ? productsToShow.filter(elm => elm.stocked === true) : productsToShow


        return (
            <>
                <SearchBar searchFor={value => this.searchProduct(value)} filterStocked={() => this.toggleStock()}/>
                <ProductTable products={productsToShow} />
            </>
        )
    }
}

export default FilterableProductTable;
