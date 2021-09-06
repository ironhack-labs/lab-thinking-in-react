import React from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

export default class FilterableProductTable extends React.Component {
  state = {
    products: this.props.products,
    filteredProd: this.props.products,
    search: '',
  };

  onChangeInput = (value) => {
    console.log(this.state.search);
    this.setState({ search: value });
    console.log(this.state.search);
    this.getProducts();
  };

  getProducts = () => {
    const duplicateProducts = [...this.state.products];
    const filteredProducts = duplicateProducts.filter(
      (product) =>
        product.name
          .toLowerCase()
          .indexOf(this.state.search.toLocaleLowerCase()) >= 0
    );
    this.setState({ filteredProd: [...filteredProducts] });
  };

  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar
          onChangeInput={this.onChangeInput}
          value={this.state.search}
        />
        <ProductTable products={this.state.filteredProd} />
      </div>
    );
  }
}
