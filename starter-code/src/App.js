import React, { Component } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import ProductCategoryRow from "./components/ProductCategoryRow";

import products from "./data.json";

const groupBy = (json, key) => {
  return json.data.reduce((acc, product) => {
    (acc[product[key]] = acc[product[key]] || []).push(product);
    return acc;
  }, {});
};

class App extends Component {
  state = {
    myJson: groupBy(products, "category"),
    isStock: false
  };

  searchProduct = e => {
    if (this.state.isStock) {
      const searchValSG = groupBy(products, "category")["Sporting Goods"].filter(
        elem =>
          elem.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
          elem.stocked
      );
      const searchValE = groupBy(products, "category")["Electronics"].filter(
        elem =>
          elem.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
          elem.stocked
      );
      this.setState(
        {
          ...this.state,
          myJson: {
            "Sporting Goods": [...searchValSG],
            Electronics: [...searchValE]
          }
        }
      );
    } else {
      const searchValSG = groupBy(products, "category")["Sporting Goods"].filter(
        elem => elem.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      const searchValE = groupBy(products, "category")["Electronics"].filter(
        elem => elem.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState(
        {
          ...this.state,
          myJson: {
            "Sporting Goods": [...searchValSG],
            Electronics: [...searchValE]
          }
        }
      );
    }
  };

  stockProducts = e => {
    if (document.getElementById("stockCheckbox").checked) {
      const stockProductsSG = this.state.myJson["Sporting Goods"].filter(
        elem => elem.stocked
      );
      const stockProductsE = this.state.myJson["Electronics"].filter(
        elem => elem.stocked
      );
      this.setState({
        myJson: {
          "Sporting Goods": [...stockProductsSG],
          Electronics: [...stockProductsE]
        },
        isStock: true
      });
    } else {
      this.setState({
        ...this.state,
        myJson: groupBy(products, "category"),
        isStock: false
      });
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          searchFunc={this.searchProduct}
          stockFunc={this.stockProducts}
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <ProductCategoryRow categories={this.state.myJson} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
