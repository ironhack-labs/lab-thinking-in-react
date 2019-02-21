import React, { Component } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import data from './data.json'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ProductTable from './components/ProductTable/ProductTable';

class App extends Component {
  state = {
    data: data
  }
  filterData = (e) => {
    let newState = {
      ...this.state,
      data: data
    }
    this.setState({
      data: {
        data: newState.data.data.filter(elem => elem.name.toLowerCase().includes(e.text.toLowerCase())).filter(elem2 => elem2.stocked === e.checked )
    }})
  }
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchInput function={this.filterData}>Search</SearchInput>
        <ProductTable {...this.state.data} />
      </div>
    );
  }
}

export default App;
