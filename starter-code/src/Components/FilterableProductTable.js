import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component{
    state ={
        filterProducts: '',
        stocked: false,
    }
    render(){
        return(
            <div>
            <h1>IronStore</h1>
            <SearchBar filterProducts={this.state.filterProducts} stocked={this.state.stock}/>
            <ProductTable products={this.props.products} filterProducts={this.state.filterProducts} stocked={this.state.stock} />
          </div>            
        )
    }
}