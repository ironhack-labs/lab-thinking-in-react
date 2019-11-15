import React, { Component } from 'react';
// import logo from './logo.svg';
import storeLogo from "./images/store-logo.svg"
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/filterable-product-table/FilterableProductTable';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: data.data,
    }
  }

  showProductTable = () => {
    // iterate throught the array of objects and pass each object to the FilterableProductTable component
    return this.state.products.map((eachProduct, i) => {
      return(
        <FilterableProductTable key={i} filterListP={this.filterList} eachProductP={eachProduct}/>
      )
    });
  }

  filterList = (e, productName) => {
    e.preventDefault();
    console.log("app", productName)

    let filteredProductList = [...data.data].filter((eachProduct) => {
      return eachProduct.name.toLowerCase().includes(productName.toLowerCase())
    });

    console.log(filteredProductList)
    
    this.setState({
      products: filteredProductList,
    })
  } 

  render() {
    // console.log("rendering")
    // print the whole object
    // print the array of objects thus, array = data.data
    // console.log(data.data)

    let productsArr = this.state.products

    // console.log("App.jsx",productsArr)
    // console.log("App.jsx",this.state.products)

    return (
      <div className="App">

        {/* title */}
        <header className="App-header">
          <img src={storeLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Store</h1>
        </header>
        {/* table */}
        <FilterableProductTable filterListP={this.filterList} productsArrP1={productsArr} />

      </div>
    );
  }
}
