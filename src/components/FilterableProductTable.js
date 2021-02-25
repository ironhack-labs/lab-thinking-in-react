import React from 'react';
import { Component } from 'react'

import { Container } from 'react-bootstrap'

import SearchBar from './SearchBar'
import ProductsTable from './ProductsTable'

import products from '../data.json'

class FilterableProductTable extends Component {

    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.setState({products: this.props.products})
    }

    searchProduct(productName) {
        const filteredProducts = products.data.filter(elm => elm.name.toUpperCase().includes(productName.name.toUpperCase()))
        this.setState({products: filteredProducts})

    }

    checked(check) {
        if (check.stocked) {
            const filteredProducts = products.data.filter(elm => {
                if (elm.stocked && elm.name.toUpperCase().includes(check.name.toUpperCase())) {
                    return elm
                }
            })
            this.setState({products: filteredProducts})
        } else {this.searchProduct(check)}
    }

    render() {
        return (
            <Container>
                <h1>Products</h1>
                <SearchBar searchProduct={(productName) => this.searchProduct(productName)} checked={(check) => this.checked(check)} />
                <ProductsTable products={ this.state.products }/>
            </Container>
        )
    }
}

export default FilterableProductTable