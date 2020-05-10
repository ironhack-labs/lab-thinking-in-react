import React, { Component } from 'react';
import data from "./data.json";
import FilterableProductTable from "./Component/FilterableProductTable"




export default class App extends Component {
  render() {
    return (
     <div>
       <FilterableProductTable/>
     </div>
    );
  }
}
