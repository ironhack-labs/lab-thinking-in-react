import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import FilterableProductTable from './Components/FilterableProductTable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data
    };
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable data={this.state.data}/>
      </div>
    );
  }
}

export default App;
