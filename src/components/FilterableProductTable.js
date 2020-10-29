import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import data from '../data.json'

export default class FilterableProductTable extends Component {
    state = {
        products:data.data,
        search: '',
    }

    searchProduct = ({target: {value:search}}) => {
        this.setState({search});
    };
  
    render() {
      const filteredProducts = this.state.products.filter((product)=>
         product.name
         .toLowerCase()
         .includes(this.state.search.toLowerCase())
      );

        
      return (
        <div>

         <SearchBar search={this.state.search} onChange= {this.searchProduct}/>
         <ProductTable products={this.state.products} filteredProducts={filteredProducts}/>
         
        </div>
      );
    }
  }