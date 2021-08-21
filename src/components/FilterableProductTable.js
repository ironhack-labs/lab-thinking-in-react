import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import products from '../data.json';

export default class FilterableProductTable extends Component {
    state = {
        productsArr: products.data
    }

    findProduct = (event) => {
        let name = event.target.value;
        this.setState(prevState => {
          return {
            productsArr: products.data
          }
        });
    
        this.setState(prevState => {
          return {
            productsArr: prevState.productsArr.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
          }
       });
      }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar findTheProduct={this.findProduct}></SearchBar>
                <ProductTable productsArr={this.state.productsArr} findTheMovie={this.findProduct}></ProductTable>
            </div>
        )
    }
}
