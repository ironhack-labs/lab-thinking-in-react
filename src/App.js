import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ProductRow from './components/ProductRow';
const products = data.data;

class App extends Component {
  state = {
    products: products,
  };

  filterByName = (input) => {
    console.log(input);
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(input.toLowerCase())
    );

    this.setState({
      products: filteredProducts,
    });
  };

  render() {
    return (
      <div>
        <h1 className="App__title">IronStore</h1>

        <div className="App">
          <FilterableProductTable products={products} />
        </div>

        <div>
          <SearchBar filterByName={this.filterByName} />
          <ProductTable products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default App;
