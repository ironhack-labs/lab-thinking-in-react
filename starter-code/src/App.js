import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import FilterableProduct from "./components/FilterableProductTable/filterableProduct";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterQuery: "",
      products: data.data,
      filteredProducts: data.data
    };
  }

  filterProduct(e) {
    
    const filter = e.target.value;
    let filteredProducts = this.state.products.filter(product => {
      return product.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });

    this.setState({
      ...this.state,
      filterQuery: filter,
      filteredProducts: filteredProducts
    });
  }

  filterStock(e) {
    
    const isCheckedOnlyStock = e.target.checked;
    let filterLink;
    let newFilter = {...this.state}
    if (isCheckedOnlyStock) {
      filterLink = this.state.filteredProducts.filter(product => {
        return product.stocked === isCheckedOnlyStock;
      });
    } else {
      filterLink = this.state.filteredProducts;
      
      
    }

    this.setState({
      ...this.state,

      filteredProducts: filterLink
      

    },()=>{
      console.log(newFilter)
      this.state.filteredProducts = [...newFilter.filteredProducts]
    });
  }

  render() {
    return (
      <div>
        <FilterableProduct
          filterStock={e => this.filterStock(e)}
          products={this.state.filteredProducts}
          filterProductHandler={e => this.filterProduct(e)}
        />
      </div>
    );
  }
}

export default App;
