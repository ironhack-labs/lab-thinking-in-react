import React, { Component } from 'react';
import './App.css'
import FilterableProductTable from './components/FilterableProductTable';
import 'bulma/css/bulma.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <h1 className="App-header">IronStore</h1>
      <div className="table-list">
        <FilterableProductTable products />
      </div>
      </React.Fragment>
    );
  }
}

export default App;