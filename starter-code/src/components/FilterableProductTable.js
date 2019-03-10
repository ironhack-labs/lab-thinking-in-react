//"mother" component

import React, { Component } from 'react';
import data from '../data.json';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';


class FilterableProductTable extends Component {
  state = {
    searchquery: ""
  }

  //fonction permettant au composant SearchBar de transmettre la valeur de sa query
  callme = (val) => {
    console.log("on m'a transmis la valeur " + val)
    this.setState({ searchquery: val });
  }

  render() {


    return (
      <div>
        <h1>IronStore</h1>

        <SearchBar callme={this.callme} />

        <ProductTable searchquery={this.state.searchquery} />
      </div>
    )
  }

}


export default FilterableProductTable;