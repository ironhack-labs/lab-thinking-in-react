import React, { Component } from 'react';
import {data} from '../data'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: data,
      filterProducts: data,
      search: '',
      checked: false
    }
  }
  handleSearch(e) {
    let filterProducts = this.state.products.filter(p => p.name.toUpperCase().includes(e.target.value.toUpperCase()));
    this.setState({
      search: e.target.value || '',
      filterProducts
    });
  }
  handleStock(e) {
    this.setState({checked:!this.state.checked});
  }
  render() {
    return (
      <React.Fragment>
        <h1>Thinking in React</h1>
        <SearchBar onSearch={(e)=>this.handleSearch(e)} onStock={(e)=>this.handleStock(e)} value={this.state.search}/>
        <ProductTable checked={this.state.checked} products={this.state.products} filterProducts={this.state.filterProducts}/>
      </React.Fragment>
    );
  }
}
