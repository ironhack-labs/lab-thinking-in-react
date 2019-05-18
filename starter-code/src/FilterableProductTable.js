// FiltearbleProductTable.js

import React, { Component } from 'react';
import './FilterableProductTable.css';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable"

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: this.props.products,
      showOnUncheckData: []
    }
    this.handleData = this.handleData.bind(this);
    this.showOnStock = this.showOnStock.bind(this);
  }

  handleData = (event) => {
    let inputValue = event.target.value.toLowerCase();
    let filteredData = this.props.products.filter((product) => product.name.toLowerCase().startsWith(inputValue));
    this.setState({
      filteredData: filteredData
    })
  }

  showOnStock = (event) => {
    if (event.target.checked) {
     this.setState({
       showOnUncheckData: this.state.filteredData.slice()
     })
      let onStockData = this.state.filteredData.filter(data => data.stocked)
      this.setState({
        filteredData: onStockData
      })
    } else {
      this.setState({
        filteredData: this.state.showOnUncheckData
      });
    }
  }

  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar handleData={this.handleData} filteredData={this.state.filteredData} showOnStock={this.showOnStock} />
        <ProductTable filteredData={this.state.filteredData} />
      </div>
    );
  }
}

export default FilterableProductTable;
