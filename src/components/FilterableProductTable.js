import React, { Component } from 'react'
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default class FilterableProductTable extends Component {
    state = {
        query: "",
        inStock: false,
        productsData: this.props.products
    }
    handleSearch = searchInput => {
        this.setState({
            query: searchInput
        })
      }
      handleInStock = () => {
            if (!this.state.inStock) {
                const productsInStock = this.state.productsData.filter(product => {
                    return product.stocked
                })
                this.setState({
                    inStock: !this.state.inStock,
                    productsData: productsInStock
                })
            } else {
                this.setState({
                    inStock: !this.state.inStock,
                    productsData: this.props.products
                }) 
              }
          }
    render() {
        const filtered = this.state.productsData.filter(product => {
            return product.name.toLowerCase().includes(this.state.query.toLowerCase())
        })
        const products = filtered.map(product => {
            return (
                <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                </tr>
            )
        })

        return (
            <>
            <SearchBar 
            inStock={this.state.inStock}
            query={this.state.query}
            search={this.handleSearch}
            products={this.props.products}
            handleInStock={this.handleInStock}
            />
            <ProductTable 
            products={products}
            filtered={filtered}
            /> 

            </>
        )
    }
}
