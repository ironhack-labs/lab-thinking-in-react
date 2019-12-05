import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar"
import ProductTable from "../ProductTable/ProductTable"




export default class FilterableProductTable
 extends Component {
  constructor() {
    super();

   
     
  }

  render() {
  let pr = this.props.products.data
    //  console.log(pr)
    return (
      <div className = "FilterableProductTable">
     
     <h1> IronStore </h1>
     <SearchBar> </SearchBar>
     <ProductTable products={pr}></ProductTable>
      </div>
    );
  }
}