import React, { Component } from "react";
import data from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      data: data.data,
      categories: ["Sporting Goods", "Electronics"]
    };
  }

  filterProds = (list, search) =>{
    console.log(list)
    console.log(search)
    let filtered = list.filter(prod => {
      return prod.name.includes(search.toUpperCase()) || prod.name.includes(search.toLowerCase())
    })
    this.setState({data:filtered})
    console.log(filtered)
  }
  
  render() {
    let list = data.data;
    return (
      <div>
        <SearchBar onSearch={this.filterProds} list={list} />
        <ProductTable data={this.state.data}/>
      </div>
    );
  }
}

export default FilterableProductTable;
