import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class App extends Component {
  state = {
    data: [...data],
    query: '',
    showIfIsStocked: false
  };

  setQuery = query => {
    console.log('query:', query);
    this.setState({
      query: query
    });
  };

  setCheckbox = check => {
    this.setState({
      showIfIsStocked: check
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Ironstore</h1>
        <SearchBar
          setQuery={this.setQuery}
          query={this.state.query}
          showIfIsStocked={this.state.showIfIsStocked}
          setCheckbox={this.setCheckbox}
        />
        <ProductTable
          query={this.state.query}
          data={this.state.data}
          showIfIsStocked={this.state.showIfIsStocked}
        />
      </div>
    );
  }
}

export default App;
