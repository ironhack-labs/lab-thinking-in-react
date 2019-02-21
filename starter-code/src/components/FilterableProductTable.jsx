import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import products from '../data.json';

export default class FilterableProductTable extends Component {
  state = {
    listProducts: products.data,
  };

  filterProducts = (filter, stock) => {
    const newState = {...this.state};
    const newArr = [];
    for(var i = 0; i < products.data.length; i++){
      if(products.data[i].name.indexOf(filter) !== -1 && (products.data[i].stocked || products.data[i].stocked == stock)){
        newArr.push(products.data[i])
      }
    }
    newState.listProducts = newArr;
    this.setState (newState);
  };

  render () {
    return (
      <div>
        <SearchBar funtionFilter={this.filterProducts} />
        <ProductTable listProd={this.state.listProducts} />
      </div>
    );
  }
}
