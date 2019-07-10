import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: props.products.data,
      searchBarValue: "",
      checked: false
    };
  }

  filteredProduct = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value.toLowerCase()
      },
      () => {
        const copiedProduct = [...this.props.products.data];
        const filteredProducts = copiedProduct.filter(product =>
          product.name.toLowerCase().includes(this.state.searchBarValue)
        );
        this.setState({
          products: filteredProducts
        });
      }
    );
  };

  shownProduct = () => {
    this.setState(
      {
        checked: !this.state.checked
      },
      () => {
        const copiedProduct = [...this.props.products.data];
        if (this.state.checked) {
          console.log(this.state.checked);
          const filteredProducts = copiedProduct.filter(
            product => product.stocked
          );
          this.setState({
            products: filteredProducts
          });
        } else {
          this.setState({
            products: copiedProduct
          });
        }
      }
    );
  };

  render() {
    return (
      <section className="big-container">
        <h1>IronStore</h1>
        <SearchBar
          filteringProduct={this.filteredProduct}
          showingProduct={this.shownProduct}
          value={this.state.searchBarValue}
          checked={this.state.checked}
        />
        <ProductTable products={this.state.products} />
      </section>
    );
  }
}

export default FilterableProductTable;
