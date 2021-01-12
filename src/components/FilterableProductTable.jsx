import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export class FilterableProductTable extends Component {

    state = {
        products: this.props.products,
        searchValue: ""
    }

    searchProduct = (evt) => {
        const valueSearched = evt.target.value

        this.setState({
            searchValue: valueSearched,
            products: [...this.state.products, valueSearched]
        })
    }

    render() {
        return (
            <div>
                <SearchBar onChange={(evt)=>this.searchProduct(this.state.searchValue)} />
            
        <ProductTable products={this.state.products}/></div>
                
        )}}
export default FilterableProductTable
