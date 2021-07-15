import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
        }
    }

    loadProducts() {
        this.setState({ products: this.props.products })
    }

    filterProducts = (value) => {

        const productsFiltered = this.props.products.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))

        productsFiltered.length ? this.setState({ products: productsFiltered }) : this.setState({ products: this.props.products })


    }


    componentDidMount() {
        this.loadProducts()
    }

    render = () => {
        return (
            this.state.products.length > 0 ?
                <>
                    <h1>IronStore</h1>
                    <SearchBar fn={this.filterProducts} />
                    <ProductTable products={this.state.products} />
                </>
                : 'Cargando...'

        )
    }
}

export default FilterableProductTable