// imports
import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
// component
class FilterableProductTable extends React.Component {
  state = {
    products: this.props.products,
    copyOfProducts: this.props.products,
  };
  filteredProducts(event) {
    const value = event.target.value.toLowerCase();
    const filteredProducts = this.state.products.filter((product) => {
      return product.name.toLowerCase().includes(value);
    });
    this.setState({ ...this.state, copyOfProducts: filteredProducts });
  }
  render() {
    return (
      <div>
        <h2> IronStore </h2>
        <SearchBar filterFunc={(event) => this.filteredProducts(event)} />
        <ProductTable products={this.state.copyOfProducts} />
      </div>
    );
  }
}

//export
export default FilterableProductTable;
