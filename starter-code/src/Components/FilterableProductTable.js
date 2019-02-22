import React, { Component } from 'react'
import Products from './products';
import SearchBar from './searchBar';
import data from '../data';

export default class FilterableProductTable extends Component {

  state = {
    data: data.data
  }

  searchFunction = (searchWord, checked) => {
    let newState = {
      ...this.state
    }
    if (checked) {
      newState.data = data.data.filter(product => {
        return (product.name.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1 && product.stocked);
      })
    }

    else {
      newState.data = data.data.filter(product => {
        return product.name.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1;
      })
    }

    this.setState(newState)
  }




  render() {
    return (
      <div>
        <SearchBar searchFunctionProp={this.searchFunction} />
        <Products dataProp={this.state.data} />
      </div>
    )
  }
}
