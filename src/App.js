import React, {Component} from 'react';
import jsondata from './data.json'
// import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable';


export default class App extends Component {
  render() {
    return (
      <>
      <h1>IronStore</h1>
        <FilterableProductTable products={ jsondata.data }/>
      </>
    )
  }
}


