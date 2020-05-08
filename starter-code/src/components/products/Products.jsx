import React, { Component } from 'react';
import products from '../../data.json'
import ProductTable from '../table/Table'
import SearchBar from '../search-bar/SearchBar'


export default class Products extends Component {
    
    constructor(){
        super()
        this.products = products.data
        this.state = {
            products: products.data,
        }
    }
    searchProduct = (product) => {
        const productsCopy = [...this.products]
        const filteredProducts = productsCopy.filter((elm) => {
            return elm.name.toUpperCase().includes(product.toUpperCase()) ? true : false
        })
        this.setState({
            products: filteredProducts
        })
    }

    render(){
        return(
            <>
                <SearchBar searchProduct={(elm)=> this.searchProduct(elm)}/>
                <ProductTable products={this.state.products}/>  
            </>
        )
    }
}

