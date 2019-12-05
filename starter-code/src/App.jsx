import React, { Component } from 'react';
import data from './data.json';
import SearchBar from './SearchBar/SearchBar.jsx';
import ProductTable from './ProductTable/ProductTable.jsx';
import './App.css';
// import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  constructor() {
    super();

    this.products = [...data.data];

    this.state = {
      checked: false,
      hasText: false,
      products: [...this.products],
      productsToFilter: [...this.products],
      productsToFilter2: [...this.products],
      productsToChecked: [...this.products]
    };
  }

  findProduct(e) {
    let searchedProduct;
    if (this.state.checked) {
      searchedProduct = [...this.state.productsToChecked];
      // searchedProduct = [...this.state.productsToFilter]
    } else {
      searchedProduct = [...this.state.products];
    }
    searchedProduct = searchedProduct.filter(product => {
      return product.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    // debugger;
    this.setState({
      ...this.state,
      hasText: e.target.value.length != 0,
      productsToFilter: searchedProduct,
      productsToFilter2: searchedProduct
    });
    // debugger
  }

  findStocked(e) {
    let productsToFilterCopy = [...this.state.productsToFilter];
    let stockedProducts = this.state.hasText
      ? [...this.state.productsToFilter2]
      : [...this.state.products];
    console.log(this.state.hasText);
    // console.log(e.target.checked);
    // let stockedProducts = [...this.state.productsToFilter];

    if (!this.state.checked) {
      console.log(this.state.productsToFilter2);
      stockedProducts = stockedProducts.filter(product => {
        return product.stocked;
      });
      this.setState({
        ...this.state,
        checked: !this.state.checked,
        // productsToChecked: stockedProducts,
        productsToFilter: stockedProducts
      });
    } else {
      console.log(this.state.productsToFilter2);
      this.setState({
        ...this.state,
        checked: !this.state.checked,
        // productsToChecked: productsToFilterCopy,
        productsToFilter: stockedProducts
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar
          onChangeSearchBox={e => this.findProduct(e)}
          onChangeCheckBox={e => this.findStocked(e)}
          checked={this.state.checked}
        ></SearchBar>
        <ProductTable payLoad={this.state.productsToFilter}></ProductTable>
      </div>
    );
  }
}

export default App;
