import React, { Component } from "react";
import "./filterableproducttable.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTheProducts: this.props
        .products /*we don't need this could have passed this.props.products, instead of using state*/,
      filteredProducts: this.props.products
      //everything in this.state is default
    };
  }

  dataFromSearch = data => {
    // console.log(data)
    let searchTerm = data;
    //passing data from search bar child to parent!!!!
    let clone = [...this.state.allTheProducts];
    let filteredList = clone.filter(eachProduct => {
      return eachProduct.name.toUpperCase().includes(searchTerm.toUpperCase());
    });

    console.log(filteredList);
    this.setState({ filteredProducts: filteredList });
  };

  render() {
    return (
      <div className="filterContainer">
        <div className="title">
          <h1>IronStore</h1>
        </div>
        <div className="search">
          <SearchBar dataFromSearch={this.dataFromSearch} />
          <ProductTable dataholder={this.state.filteredProducts} />
        </div>
      </div>
    );
  }
}

export default FilterableProductTable;
