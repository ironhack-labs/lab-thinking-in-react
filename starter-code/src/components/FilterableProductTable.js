import React, { Component } from "react";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

  state = {
    search: "",
    products: this.props.products.data,
    onlyStocked: false
  }

  onSearch = (keyword) => this.setState({search: keyword});
  onCheck = (status) => this.setState({onlyStocked: status});


  render = () => {

    const products = this.state.products
    .filter(product => (this.state.onlyStocked) ? product.stocked === true: product)
    .filter(product => product.name.toLowerCase().includes(this.state.search.toLocaleLowerCase())) 

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar onSearch={ this.onSearch } onCheck={ this.onCheck }/>
        <ProductTable products={ products } />
      </div>
    )
  }
}

export default FilterableProductTable;