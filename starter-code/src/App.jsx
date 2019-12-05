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
      products: this.products,
      productsToFilter: [...this.products]
    };
  }

  findProduct(e) {
    let searchedProduct = [...this.state.products];
    searchedProduct = searchedProduct.filter(product => {
      return product.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    // debugger;
    this.setState({
      ...this.state,
      productsToFilter: searchedProduct
    });
    // debugger
  }

  findStocked(e) {
    console.log(e.target.checked);
    this.state.checked = !this.state.checked;
    let stockedProducts = [...this.state.products];
    if (e.target.checked) {
      stockedProducts = stockedProducts.filter(product => {
        return product.stocked;
      });
    }

    // debugger;
    this.setState({
      ...this.state,
      productsToFilter: stockedProducts
    });
    // debugger
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
