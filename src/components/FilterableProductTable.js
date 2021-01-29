import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export class FilterableProductTable extends Component {

    state = {
        products: this.props.products.data,
    }

    handleSearch = (value) => {
        const newProducts = this.state.products.filter(item => (item.name.toUpperCase().includes(value.toUpperCase())))
        
        let showProducts = newProducts > 0 ? newProducts : this.state.products
        // console.log(`NEW PRODUCTS: ${newProducts}`)
        // console.log(`SHOW PRODUCTS: ${showProducts}`)

        this.setState({
            products: newProducts
        })
      }


    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar filterItems={this.handleSearch} />
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}

export default FilterableProductTable
