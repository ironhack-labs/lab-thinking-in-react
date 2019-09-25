import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar';
import ProductRow from './components/ProductRow';
import ProductTable from './components/ProductTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.data
    };
    this.search = this.search.bind(this);
  }

  search = searchTerm => {
    console.log(searchTerm);
    const itemCopy = [...data.data];
    const searched = itemCopy.filter(item => {
      let name = item.name.toLowerCase();
      if (name.includes(searchTerm.toLowerCase())) {
        return item;
      }
    });
    this.setState({
      data: searched
    });
  };

  render() {
    return (
      <div className="App">
        <FilterableProductTable data={this.state.data} />
        <SearchBar data={this.state.data} search={this.search} />
        <ProductTable data={this.state.data} />
      </div>
    );
  }
}

export default App;
