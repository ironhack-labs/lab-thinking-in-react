import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  state={
    products: data.data,
    product:''
  }

  handleChange = e => {
    this.setState({product: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={this.state.products} product={this.state.product} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
