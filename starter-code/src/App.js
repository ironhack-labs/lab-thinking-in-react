import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import data from './data.json';
import ProductTable from './components/ProductTable/ProductTable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [...data.data],
      search: '',
      filteredList: [...data.data],
      stockOnly: false
    }
    this.search = this.search.bind(this);
    this.stockOnly = this.stockOnly.bind(this);
  }

  search(event) {
    const {value} = event.target;
    const newList = [...this.state.data].filter(item => {
      if(item.stocked) {
        return (item.name.includes(value))
      } else {
        if (!this.state.stockOnly) {
          return item.name.includes(value)
        }
      }
    });
    this.setState({
      search: value,
      filteredList: newList
    })
  }

  stockOnly(event) {
    const newChecked = !event.target.checked;
    const newList = [...this.state.data].filter(item => {
      return ((item.stocked || newChecked) && item.name.includes(this.state.search))
    });
    this.setState({
      filteredList: newList,
      stockOnly: newChecked
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar onChange={this.search} onClick={this.stockOnly} />
        <ProductTable data={this.state.filteredList}/>
      </div>
    );
  }
}

export default App;