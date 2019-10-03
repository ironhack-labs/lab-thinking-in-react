import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import '../SearchBar/SearchBar.css';

import ProductTable from '../ProductTable/ProductTable';
import '../ProductTable/ProductTable.css';

import ProductRow from '../ProductRow/ProductRow';
import '../ProductRow/ProductRow.css';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super();

    this.state = {
      products: props.products,
      searchProducts: props.products,
      inStock: false
    };
  }

  makeSearch(searchText) {
    const searchProductsResults = this.state.products.filter(product =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    this.setState({
      ...this.state,
      searchProducts: searchProductsResults
    });
  }

  changeStock(stockCheckbox) {
    this.setState({
      ...this.state,
      inStock: stockCheckbox
    });
  }

  render() {
    return (
      <div className="container">
        <SearchBar
          updateSearch={searchText => this.makeSearch(searchText)}
          updateInStock={stockCheckbox => this.changeStock(stockCheckbox)}
        />

        <ProductTable>
          {this.state.inStock
            ? this.state.searchProducts
                .filter(product => product.stocked)
                .map((product, idx) => <ProductRow key={idx} {...product} />)
            : this.state.searchProducts.map((product, idx) => (
                <ProductRow key={idx} {...product} />
              ))}
        </ProductTable>
      </div>
    );
  }
}
