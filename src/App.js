import React, { Component } from 'react';
import FiltereableProductTable from './components/organisms/FiltereableProductTable';
import data from './data.json';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: data.data,
      inputValue: ''
    };
  }

  filter = e => {
    const { products } = this.state;
    const inputValue = e.target.value;

    if (inputValue !== '') {
      const allProducts = products.map(prod => prod);
      const filteredProducts = allProducts.filter(p =>
        p.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      return this.setState({
        inputValue,
        products: filteredProducts
      });
    } else {
      return this.setState({
        inputValue,
        products: data.data
      });
    }
  };

  showstockedProducts = e => {
    const { products } = this.state;
    const checkbox = e.target.checked;

    if (checkbox) {
      const allProducts = products.map(prod => prod);
      const stockedProducts = allProducts.filter(p => p.stocked);
      return this.setState({
        products: stockedProducts
      });
    } else {
      return this.setState({
        products: data.data
      });
    }
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <FiltereableProductTable
          data={products}
          filterProducts={this.filter}
          stock={this.showstockedProducts}
        />
      </div>
    );
  }
}

export default App;
