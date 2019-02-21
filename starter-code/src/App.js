import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import FilterableProductTable from "./component/FilterableProductTable/filterableProductTable";

class App extends Component {
  state = {
    productList: data
  };

  searchHandler = searchText => {
    const productIndex = searchText;
    let newState = { ...data };

    newState.data = newState.data.filter(product => {
      return product.name.indexOf(productIndex) == 0;
    });

    this.setState({ productList: newState });
  };

  checkboxHandle = check => {
    const checked = check;
    let newState = { ...data };

    if (checked) {
      newState.data = newState.data.filter(product => {
        return product.stocked == true;
      });
    }
    this.setState({ productList: newState });
  };

  render() {
    return (
      <div className="App">
        <FilterableProductTable
          products={this.state.productList}
          searchsportProp={this.searchHandler}
          checkboxHandleProp={this.checkboxHandle}
        />
      </div>
    );
  }
}

export default App;
