import React from 'react'
import { Component } from 'react'
import ProductTable from "./product/ProductTable"
import SearchBar from './search-bar/SearchBar'


class FilterableProductTable extends Component {

    state= {
        products: [...this.props.products]
    }
    
    handleSearchProducts(event) {
        const { value } = event.target  
        this.setState(({products}) => ({
           products : products.filter(product => product.name.toLowerCase().includes(value))
        }))
    }

    handleSearchAvalaibleProducts(event) {
        const {value} = event.target
        this.setState(({products}) => ({

            products : products.filter(product => product.stocked)

        }           
        ))
    }

    render(){
    const { products } = this.state

    return(
        <div>
        <SearchBar onSearch= {(event) => this.handleSearchProducts(event)} onProducstAvalaible={(event) => this.handleSearchAvalaibleProducts(event) } />
        <ProductTable products= {products} />
        </div>

    )}
}

export default FilterableProductTable