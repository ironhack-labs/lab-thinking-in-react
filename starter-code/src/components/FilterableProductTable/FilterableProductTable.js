import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../Product/ProductTable'

class FilterableProductTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: props.products,

            search: ''

        }
    }

    setSearch = word => this.setState({ search: word })

    render() {
        const filteredProducts = this.state.products.filter(elm => elm.name.startsWith(this.state.search))
        return (
            <>
                <h1>IronStore</h1>
                <SearchBar setSearch={this.setSearch} />
                <ProductTable products={filteredProducts} />

            </>
        )
    }
}

export default FilterableProductTable
