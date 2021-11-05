import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';


class App extends React.Component {
  render() {
    return (
      <div>
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
