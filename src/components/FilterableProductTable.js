import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      searchInput: "",
      ifShowOnlyOnStock: false
    }
  }

  handleSearch = (search) => {
    this.setState(search);
  }

  render() {
    let displayedProducts = this.state.searchInput.length > 0 ? 
    this.state.products.filter(p => p.name.toUpperCase().includes(this.state.searchInput.toUpperCase())) : this.state.products;
    if (this.state.ifShowOnlyOnStock) {
      displayedProducts =  displayedProducts.filter(p => p.stocked);
    }

    return (
      <>
        <SearchBar 
          onSearchInputChange={this.handleSearch} 
          searchInput={this.state.searchInput} 
          ifShowOnlyOnStock={this.state.ifShowOnlyOnStock} />
        <ProductTable products={displayedProducts} />
      </>
    )
  }
}
