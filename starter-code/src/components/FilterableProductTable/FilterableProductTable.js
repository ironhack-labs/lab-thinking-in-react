import React, { Component } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar'

export default class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state ={
            products:this.props.products
        }
    }
 
  render() {
    // console.log(this.props);
    return (
      <div>
        <SearchBar/>
        <ProductTable  products={this.state.products}/>
      </div>
    )
  }
}
