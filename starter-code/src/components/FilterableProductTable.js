import React, { Component } from "react";
import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products.data,
      productsAll: this.props.products.data,
      qProduct: "",
      qStocked: false,
    };
  }

  search = () => {
    let productsCopy = [...this.state.productsAll];

    console.log("search", this.state.qStocked)

    if (this.state.qStocked == true) {
      productsCopy = productsCopy.filter(product => {
        if (product.stocked == true)
          return product.name
            .toLowerCase()
            .includes(this.state.qProduct.toLowerCase());
      });
    } else {
      productsCopy = productsCopy.filter(product => {
        return product.name
          .toLowerCase()
          .includes(this.state.qProduct.toLowerCase());
      });
    }

    this.setState({
      products: productsCopy
    });
  };

  searchProductHandler = theSearch => {
    this.setState(
      {
        qProduct: theSearch
      },
      this.search
    );
  };

  filterStockHandler = theFilter => {
    console.log("The filter", theFilter)
    this.setState(
      {
        qStocked: theFilter
      },
      this.search
    );
  };

  render() {
    console.log(this.props.products);

    return (
      <div>
        <SearchBar
          searchItem={this.searchProductHandler}
          stockedItem={this.filterStockHandler}
        />

        {this.state.products.map((oneProduct, index) => {
          return <ProductTable key={index} {...oneProduct} />;
        })}
      </div>
    );
  }
}

export default FilterableProductTable;
