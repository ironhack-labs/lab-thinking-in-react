import React from 'react';
import logo from './logo.svg';
import jsondata from './data.json';
import './App.css';
import FilterableProductTable from './FilterableProductTable';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <FilterableProductTable products= {jsondata.data}/>
        </header>
      </div>
    );
  }
}

export default App;
