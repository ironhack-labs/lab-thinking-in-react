import React, { Component } from 'react';
import './App.css';
import data from "./data.json";
import ProductRow from './components/ProductRow'
import FilterableProductTable from "./components/FilterableProductTable";



export default class App extends Component {

  state={
    products:data.data,
  }

  
  
componentDidMount() {
      // console.log(this.state.products)
    }
  render() {
    console.log("HOLA")
    return (
      <div >
     
      <FilterableProductTable allProducts = {this.state.products}/>
     
      
      </div>
    );
  }
}
