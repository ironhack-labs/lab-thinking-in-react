import React, { Component } from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    filteredProducts: this.props.products.data
  }

  searchProducts = (search) => {
    let newProducts = [...this.state.products]
    newProducts = newProducts.filter(item => item.name.toLowerCase().includes( search.toLowerCase()));
    console.log("search:" + search)

    this.setState({
      filteredProducts: newProducts
    });
  }


  render() {
    return (
      <div className="FilterableProductTable">
      <h1>IronStore</h1>
        <SearchBar  searchProducts={this.searchProducts} />
        <ProductTable products={this.state.filteredProducts} />  
      </div>
    );
  }
}

export default FilterableProductTable;