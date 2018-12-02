import React, { Component } from 'react';

import ProductTable from "./ProductTable.js";
import SearchBar from "./SearchBar.js";

import datasArray from "../data.json";

class FilterableProductTable extends Component{

  constructor(props){
    super(props);
    this.state = {
      datasArray : datasArray.data,
      search: "",
      allItems: datasArray
    };
  }
  
  synchronizeSearch(event){
    const { value } = event.target;
    const { allItems } = this.state;
    const itemSearch = [];
    allItems.data.forEach( oneItem => {
      if (oneItem.name.toLowerCase().indexOf(value.toLowerCase()) > -1){
        itemSearch.push(oneItem)
      }
    })
    this.setState({ search: value, datasArray: itemSearch })
  }

  render(){

    const { search } = this.state;

    return(
      <div>
        <h2>Filterable Product Table</h2>
        <SearchBar onSearch={search} changeSearch={event => this.synchronizeSearch(event)} />
        <ProductTable displayItem={this.state.datasArray} />
      </div>
    )
  }
}

export default FilterableProductTable;