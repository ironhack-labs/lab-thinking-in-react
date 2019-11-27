import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    message: 'No products found'
  };

  filter = v => {
    var filteredProducts = this.props.products;
    this.setState(
      {
        products: filteredProducts.filter(
          p =>
            p.name.toUpperCase().indexOf(v.toUpperCase()) !== -1 ||
            p.price.includes(v.toUpperCase())
        )
      },
      () => {
        console.log(this.state.products);
      }
    );
  };
  render() {
    return (
      <div>
        <div className="searchBar">
          <SearchBar
            clbk={input => {
              this.filter(input);
            }}
          />
        </div>
        <table className="table">
          <ProductTable products={this.state.products} />
        </table>
      </div>
    );
  }
}
