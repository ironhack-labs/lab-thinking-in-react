import React from 'react';
import './App.css';
import FilterableProductTable from './components/filterableProductTable/FilterableProductTable';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <FilterableProductTable></FilterableProductTable>

      </div>
    );
  }
}
