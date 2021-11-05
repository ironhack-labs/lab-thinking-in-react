import React from "react";
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import products from './../data.json';


class FilterableProductTable extends React.Component {
  state = {
    productsToDisplay: products.data,
  };

  filterProducts = (searchInput) => {
    const productsCopy = [
      ...this.state.productsToDisplay.filter((product) => {
        return product.name.toLowerCase().includes(searchInput);
      }),
    ];
    this.setState({ productsToDisplay: productsCopy });
  };

  render() {
    return (
      <table>
        <thead className="title">IronStore</thead>
        <SearchBar
          listOfProducts={this.state.productsToDisplay}
          filterProductsHandler={this.filterProducts}
        />
        <ProductTable listOfProducts={this.state.productsToDisplay} />
      </table>
    );
  }
}

export default FilterableProductTable;