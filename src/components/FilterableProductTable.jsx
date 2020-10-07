import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
  };

  search = (searchProduct) => {
    const copyproducts = [...this.props.products];
    //const reg = new RegExp(searchProduct, 'gi');

    const filtered = copyproducts.filter((product) =>
      product.name
        .toLowerCase()
        .slice(0, searchProduct.search.length)
        .includes(searchProduct.search.toLowerCase())
    );
    // console.log(filtered);
    //console.log(copyproducts);
    //copyproducts.filter(reg.test())
    //reg.test(product.name) map/filter
    //words.filter(word => word.length > 6);
    this.setState({ products: filtered });
  };

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.search} />
        <div>
          <ProductTable products={this.state.products} />
        </div>
      </div>
    );
  }
}
