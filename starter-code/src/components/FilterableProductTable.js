import React, { Component } from "react";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedProduct: "",
      checkBox: false,
      resultsProduct: []
    };
  }

  updateSearch(event) {
    const { value } = event.target;
    this.setState({ searchedProduct: value });
    console.log(this.state.searchedProduct);
  }

  searchProducts() {
    const { searchedProduct, resultsProduct, checkBox } = this.state;
    const { products } = this.props;

    if (checkBox === true) {
      var allResults = products.data.filter(oneProduct => {
        return (
          oneProduct.name.indexOf(searchedProduct) > -1 &&
          oneProduct.stocked === false
        );
      });
      return allResults;
    }

    if (checkBox === false) {
      var allResults = products.data.filter(oneProduct => {
        return oneProduct.name.indexOf(searchedProduct) > -1;
      });

      return allResults;
    }
  }

  updateCheck(event) {
    const { checked } = event.target;
    const { checkBox } = this.state;

    // const{checkBox} = this.state;

    console.log(checked);
    this.setState({ checkBox: checked });
  }
  // const target = event.target;
  // const value = target.type === "checked" ? target.checked : target.value;
  // const name = target.name;
  // this.setState({ [name]: value });
  // var inStock = allResults.filter(oneProduct => {
  //   return oneProduct.stocked === true;
  // });
  // return inStock;

  render() {
    // console.log(this.props.products);
    return (
      <div className="FilterableProductTable">
        <SearchBar
          search={this.state.searchedProduct}
          searchChange={event => this.updateSearch(event)}
          checkBox={this.state.checked}
          checkChange={event => this.updateCheck(event)}
        />
        <ProductTable allProducts={this.searchProducts()} />
      </div>
    );
  }
}

export default FilterableProductTable;
