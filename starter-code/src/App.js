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
  
  constructor() {
    super() 
      this.state = {
        dat: filterForEach,
      }
      }
      handleName = (event) => {

        console.log(event.target.value)
        // let searchName = filterForEach.filter((e, i) => {
        //   console.log(e[i])
          console.log(filterForEach); 
        // })
        // this.setState({
          // name: event.target.value
        //  })
}

  render() {
    return (

      <div className="App">
      
      <SearchBar onChange={this.handleName}/>
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
