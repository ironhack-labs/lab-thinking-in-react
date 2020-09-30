import React, { Component } from 'react';
import './FilterableProductTable.css';
import SearchBar from './../SearchBar/SearchBar';
import ProductTable from './../ProductTable/ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    srchKey: '',
    inStock: false,
  };

  /**  */
  searchProducts = (key, inStock) => {
    // console.log(' filterabeproducttable -> searchProducts -> inStock', inStock);
    this.setState({ srchKey: key, inStock });
  };

  /**  */
  updateSrchArray = (key) => {
    let productsInfo = this.state.products;
    productsInfo = productsInfo.filter(
      (prod) =>
        prod.name.toLowerCase().trim().includes(key.toLowerCase().trim()) &&
        prod.stocked === this.state.inStock
    );
    return productsInfo;
  };

  /**  */
  getCategories = () => {
    let products = this.updateSrchArray(this.state.srchKey);
    return products
      .map((prod) => prod.category)
      .filter((ele, idx, categArr) => categArr.indexOf(ele) === idx);
  };

  render() {
    const categoryArray = this.getCategories();
    let products = this.updateSrchArray(this.state.srchKey);
    const subProductArray = categoryArray.map((category) =>
      products.filter((ele) => ele.category === category)
    );

    return (
      <div>
        <SearchBar srchMethod={this.searchProducts} />
        {subProductArray.map((catgArr) => (
          <ProductTable allProducts={catgArr} />
        ))}
      </div>
    );
  }
}
