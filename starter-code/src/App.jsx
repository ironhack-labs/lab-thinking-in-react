import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import ProductTable from './components/ProductTable ';
import SearchBar from './components/SearchBar';
import CheckboxFilter from './components/CheckboxFilter';

class App extends Component {
  state = {
    productData: data,
  };

  handleSearchedWord = (e) => {
    let { productData } = this.state;
    let { value } = e.target;
    let updatedData = data.filter((product, index) =>
      product.name.toLocaleLowerCase().includes(value)
    );
    productData = updatedData;
    this.setState({ productData });
  };

  handleCheckedFilter = (e) => {
    let { productData } = this.state;
    let updatedData = e.target.checked
      ? data.filter((product, index) => product.stocked === true)
      : data;
    productData = updatedData;
    this.setState({ productData });
  };

  render() {
    const { productData } = this.state;
    const { handleSearchedWord, handleCheckedFilter } = this;

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar handleChange={handleSearchedWord} />
        <CheckboxFilter handleClick={handleCheckedFilter} />
        <ProductTable data={productData} />
      </div>
    );
  }
}

export default App;
