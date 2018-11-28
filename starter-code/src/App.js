import React, { Component } from 'react';
import './App.css';
import { data } from './data.json';
import FilterableProductTable from './components/FilteredProductTable';

class App extends Component {
  state = {
    data: data,
  }

  searchData(query) {
    let newData = data.filter(value => {
      return value.name.includes(query)
    });
    this.setState({data: newData})
  }

  // searchStock

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={data}  />
      </div>
    );
  }
}

export default App;
