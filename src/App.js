import React, { Component } from 'react';
import jsondata from './data.json';
import './App.css';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';

class App extends Component {
  state = {
    data: jsondata.data,
    search: '',
    stock: false
  }

  updateSearch = (search) => {
    this.setState({search: search})
  }

  updateCheck = (checked) => {
    checked ? this.setState({stock: true}) : this.setState({stock: false})
  }

  render() {
  let filteredData
  this.state.search !== '' ? filteredData = this.state.data.filter(product => product.name.toLowerCase().includes(this.state.search.toLowerCase())) : filteredData = this.state.data
  this.state.stock ? filteredData = [...filteredData].filter(product => product.stocked) : filteredData = [...filteredData]
    return (
      <div className="App mx-5 my-4">
        <h1>IronStore</h1>
        <SearchBar handleInput={this.updateSearch} handleCheck={this.updateCheck}/>
        <ProductTable products={filteredData} />
      </div>
    );
  }
}

export default App;
