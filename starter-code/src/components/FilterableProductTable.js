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
    newProducts = newProducts.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    

    this.setState({
      filteredProducts: newProducts
    });
  }

  searchStockedProducts = (search) => {
    let newProducts = [...this.state.products]
    newProducts = newProducts.filter(item => item.stocked === search);

    this.setState({
      filteredProducts: newProducts
    });
  }


  render() {
    return (
      <div className="FilterableProductTable">
      <h1>IronStore</h1>
        <SearchBar  searchProducts={this.searchProducts} searchStockedProducts={this.searchStockedProducts} />
        <ProductTable products={this.state.filteredProducts} />  
      </div>
    );
  }
}

export default FilterableProductTable;