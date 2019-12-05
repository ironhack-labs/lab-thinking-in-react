import React, { Component } from 'react';
// import "./reset.css";
import './App.css';
import FilterableProductTable from "./FilterableProductTable/FilterableProductTable"
import data from "./data.json"



export default class App extends Component {
  constructor(){
    super();


     this.dataList = {...data}

  //   this.state = {
  //   displayDataList : this.dataList
  //   };
    
   }

  render() {
     console.log(this.dataList)
    return (
      <div className="App">
       
       <FilterableProductTable products={this.dataList}/>
      
      </div>
    );
  }
}
