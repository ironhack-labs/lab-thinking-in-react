import React, {Component} from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="container">
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
