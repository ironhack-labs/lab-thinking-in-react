import React, { Component } from 'react'
import SearchBar from "./SearchBar.js";
import data from './data.json';
import ProductTable from "./ProductTable.js";


export default class FilterableProductTable extends Component {
  constructor(){
    super();
    this.state = {
      data: data
    }
  }

  changeState(newState){
    this.setState({
      ...this.state,
      data: newState
    })
  }

  render() {
    return (
      <div className="product-table">
        <SearchBar products={data} changeState={newState => this.changeState(newState)}></SearchBar>
        <ProductTable products={this.state.data}></ProductTable>
      </div>
    )
  }
}