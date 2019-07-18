import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [...data.data],
      filterQuery: "",
      filteredProducts: [],
      checkedActive : false 
    };
  }

  filterProducts(e) {
    const filter = e.target.value;
    console.log(filter);
    let filteredProducts = this.state.products.filter(product => {
      return product.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });
    this.setState({
      ...this.state,
      filterQuery: filter,
      filteredProducts: filteredProducts
    });
  }

  checkboxValue(){
    this.setState({
      ...this.state,
      checkedActive : !this.state.checkedActive
    })
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      filterQuery: "",
      products: data.data,
      filteredProducts: data.data
    });
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronStore</h1>
        </header>
        <section>
          <SearchBar
            filterProducts={e => this.filterProducts(e)}
            filterQuery={this.state.filterQuery}
          />
          <input
            type="checkbox"
            id="dissapButton"
            onChange={() => this.checkboxValue()}
          />
          <ProductTable products={this.state.filteredProducts} checkedActive={this.state.checkedActive} />
        </section>
      </div>
    );
  }
}

export default App;
