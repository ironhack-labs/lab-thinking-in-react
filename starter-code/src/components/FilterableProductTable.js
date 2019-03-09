import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  state = {
    products: this.props.products
  };
  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          onChange={searchString => {
            const filteredProducts = this.props.products.filter(product =>
              product.name.toLowerCase().includes(searchString.toLowerCase())
            );
            this.setState({ products: filteredProducts });
          }}
        />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
