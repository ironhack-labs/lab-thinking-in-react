import React, { Component } from "react";
import data from "../data.json";
import ProductCategory from "./ProductCategoryRow/ProductCategoryRow";
import SearchBar from "./SearchBar/SearchBar";
import ProductTable from "./ProductTable/ProductTable";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.categories)
  }

  render(){
    return(
      <div>
        <SearchBar />
        <ProductTable categories={this.props.categories}/>
       </div>
    )
  }
}

export default FilterableProductTable;
