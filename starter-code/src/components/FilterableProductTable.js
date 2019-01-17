import React, { Component } from 'react';
import {data} from '../data'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: data,
      search: '',
      checked: false
    }
  }

  handleSearch =(p)=>{
    this.setState({
      search:p.target.value
    })
  }


  handleStock=()=>{
    this.setState({checked:!this.state.checked});
    console.log(this.state.checked)
}

  render() {
    return (
      <React.Fragment>
        <h1>Product List</h1>
        <SearchBar handleSearch={this.handleSearch} handleStock={this.handleStock}/>
        <ProductTable checked={this.state.checked} search={this.state.search} products={this.state.products}/>
      </React.Fragment>
    );
  }
}