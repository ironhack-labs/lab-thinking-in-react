import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      onStock: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleSearch(event) {
    console.log(event.target.value);
    this.setState({
      search: event.target.value
    });
  }
  handleCheck(event){
    this.setState({
      onStock: event.target.checked
    })
  }
  render() {
   
    let filteredProducts = this.props.products.filter(product =>
      product.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    let stockedProducts = filteredProducts.filter(product => product.stocked === true)
    return (
      <div className="box">
        <h1>Iron Store</h1>
        <SearchBar onSearch={this.handleSearch} onCheck={this.handleCheck}/>
        <ProductTable products={this.state.onStock ? stockedProducts : filteredProducts}/>
      </div>
    );
  }
}

export default FilterableProductTable;