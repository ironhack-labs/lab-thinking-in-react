import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      displayed: this.props.products
    };
  }

  productSearchHandler = state => {
    console.log(state.searchStr, state.inStockOnly);
    const filteredProducts = [...this.state.products].filter(el => {
      let regex = new RegExp(state.searchStr, "i");
      let stockCheck = state.inStockOnly === false ? true : el.stocked;
      console.log(stockCheck, el.name, regex);
      return stockCheck && el.name.match(regex);
    });
    this.setState({
      displayed: filteredProducts
    });
  };

  render() {
    return (
      <div>
        <SearchBar searchProducts={this.productSearchHandler} />
        <ProductTable products={this.state.displayed} />
      </div>
    );
  }
}

export default FilterableProductTable;
