import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';
import data from './data.json'

class App extends React.Component {
  render() {
    console.log(data)
    return (
      <div className="App">
        <FilterableProductTable {...data}/>
      </div>
    );
  }
}

export default App;
