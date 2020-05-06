import React, { Component } from 'react';
// import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';
import data from './data.json'
export default class App extends Component {

  render() {

    // console.log(this.state.products)

    return (
      <div className="App">
        <h1>IronStore</h1>
        <div>
          {/* <FilterableProductTable products={data} /> */}
          <FilterableProductTable products={data.dataJson} />
        </div>


      </div>
    );
  }
}

