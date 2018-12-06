import React, { Component } from 'react';
import './App.css';
import Data from "./data.json";
import ProductTable from './component/ProductTable.js'
import SearchBar from './component/SearchBar.js'
import ProductCategoryRow from './component/ProductCategoryRow.js'

const filterForEach = {};
  Data.data.forEach( e => {
    filterForEach[e.category] ? filterForEach[e.category].push(e) : filterForEach[e.category] = [e]
})


class App extends Component {
  render() {
    return (

      <div className="App">
      
      <SearchBar/>
      {Object.keys(filterForEach).map((title, key) => {
        return (<div>
          <ProductCategoryRow key={key} title={title}/>
          {Object.values(filterForEach[title]).map((e, key2) => {
            return <ProductTable key={key2} price={e.price} name={e.name} stock={e.stock}/>
          })}
      
      </div>)
      
        })}
      




      </div>
    );
  }
}

export default App;
