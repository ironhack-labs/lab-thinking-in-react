import React, { Component } from 'react'
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    onlyStocked: false,
    search: "",
  };


  //The event listeners is only taking care of setting states
  handleSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  };

  handleFilter = (event) => {
    this.setState({ onlyStocked: event.target.checked });
  }


  // handleSearch = (event) => {
  //   const filteredArray = this.props.products.filter((product) => {
  //     return product.name.toLowerCase().includes(event.target.value.toLowerCase())
  //   })
  //   this.setState({ products: filteredArray });
  // };

  // handleFilter = (event) => {
  //   this.setState({ onlyStocked: !this.state.onlyStocked });
  //   if (this.state.onlyStocked) {
  //     const filteredArray = this.props.products.filter((product) => {
  //       if (product.stocked) {
  //         return product;
  //       }
  //     })
  //     this.setState({ products: filteredArray });
  //   } else this.setState({ products: this.props.products });
  // };

  render() {
    return (
      <div>
        <SearchBar searchCb={this.handleSearch} checkCb={this.handleFilter} />
        {/* Passing down the states to Product Table Component */}
        <ProductTable products={this.state.products} search={this.state.search} onlyStocked={this.state.onlyStocked} />
      </div>
    )
  }
}

export default FilterableProductTable;