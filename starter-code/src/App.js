import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import ProductCategoryRow from "./components/ProductCategoryRow";
import ProductRow from "./components/ProductRow";

class App extends Component {
  state = {
    data: data.data
  };

  searchProduct = e => {
    const text = e.target.value;
    const regEx = RegExp(text, "i");
    const filtered = data.data.filter(d => regEx.test(d.name));
    //console.log(filtered.name);
    this.setState({ data: filtered });
  };

  stockedProduct = e => {
    const text = e.target.checked;
    const regEx = RegExp(text, "i");
    const filtered = data.data.filter(d => regEx.test(d.stocked));
    // console.log(filtered.stocked);
    text
      ? this.setState({ data: filtered })
      : this.setState({ data: data.data });
  };

  render() {
    const { data } = this.state;
    // console.log(data);
    let last = null;
    let array = [];
    data.forEach(element => {
      if (element.category !== last) {
        array.push(<ProductCategoryRow category={element.category} />);
      }
      array.push(
        <ProductRow
          name={element.name}
          price={element.price}
          stocked={element.stocked}
        />
      );
      last = element.category;
    });

    return (
      <div>
        <SearchBar
          searchProduct={this.searchProduct}
          stockedProduct={this.stockedProduct}
          {...data}
        />
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tbody>
            {/* {data.map((data, index) => {
            return <ProductCategoryRow key={index} {...data} />;
          })}
          {data.map((data, index) => {
            return <ProductRow key={index} {...data} />;
          })} */}
            {array}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
