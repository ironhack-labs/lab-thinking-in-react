import React, { Component } from 'react';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';
import './uikit.css';
import './uikit-rtl.css';
// import './uikit';
// import './uikit-icons';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <FilterableProductTable products={ data } />
      </div>
      </div>
    );
  }
}

export default App;