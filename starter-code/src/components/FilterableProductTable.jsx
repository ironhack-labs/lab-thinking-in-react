import React, { Component } from 'react';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'



class FilterableProductTable extends Component {

  state = {
    products: this.props.products.data
  }

  filterProducts = (searchWord) => {
    const filteredProducts = this.props.products.data.filter( (product) => product.name.toLowerCase().includes(searchWord.toLowerCase()));  
    this.setState({
      products : filteredProducts
    });
  }

  render() {
    const products = this.state.products;
    return (
    <div className="filterable-table-box">
      <h2 className="title">IronStore</h2>
      <SearchBar filterProducts= { this.filterProducts }/>
      <ProductTable products= { products } />
    </div>
      );
  }
}


export default FilterableProductTable;