import React, { Component } from "react";
import data from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      data: data.data,
      filteredData: data.data
    };
  }

  filterSearch = search => {
    let newData = this.state.data.filter(ele => {
      return (ele.name.includes(search));
      
    });
    console.log(newData);
    this.setState({filteredData:newData})
  };

  render() {
    return (
      <div style={{ border: "orange" }}>
        <SearchBar
          newSearch={search => {
            this.filterSearch(search);
          }}
        />
        <ProductTable data={this.state.filteredData}/>
      </div>
    );
  }
}

export default FilterableProductTable;
