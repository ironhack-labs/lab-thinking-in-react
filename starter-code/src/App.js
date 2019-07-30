import React, { Component } from 'react';
import './App.css';
import products from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  constructor () {
    super();
    this.state = {
      products: [],
      filteredProducts: [],
      filter: '',
      justOnStock: false,
    }
  }

  componentDidMount() {
    const arr = [];
    for (let x = 0; x < products.data.length; x += 1) {
      arr.push(products.data[x]);
    }

    this.setState({
      products: arr,
      filteredProducts: arr,
    });
  }

  setJustOnStock() {
    this.setState({
      justOnStock: !this.state.justOnStock,
    }, () => this.setFilter());
  }

  setFilter(text = this.state.filter) {
    const arr = this.state.products.filter(product => {
      if(this.state.justOnStock)
        return product.name.toLowerCase().includes(text.toLowerCase()) && product.stocked;
      return product.name.toLowerCase().includes(text.toLowerCase())
    });

    this.setState({
      filter: text,
      filteredProducts: arr,
    })
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable setJustOnStock={() => this.setJustOnStock()} filter={this.state.filter} setFilter={(text) => this.setFilter(text)} products={this.state.filteredProducts} />
      </div>
    );
  }
}

export default App;
