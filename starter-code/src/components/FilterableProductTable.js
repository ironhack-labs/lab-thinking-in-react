import React, { Component } from "react";
import ProductRow from "./ProductRow";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import "../FilterableProductTable.css";

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: undefined,
      productsD: this.props.product
    };
  }

  search = e => {
    this.setState(
      {
        ...this.state,
        searchInput: e
      },
      () => {
        this.searchProduct();
      }
    );
  };

  searchProduct = () => {
    let products = [...this.props.product];
    products = products.filter(product => {
      return product.name.includes(this.state.searchInput);
    });
    this.setState({
      ...this.state,
      productsD: products
    });
  };
  render() {
    return (
      <div>
        <h1>IronStore</h1>

        <SearchBar search={this.search} />

        <table>
          <thead className="table">
            <tr>
              <th>name</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productsD.map((product, idx) => {
              return (
                <li key={idx}>
                  <ProductRow
                    stocked={product.stocked}
                    name={product.name}
                    price={product.price}
                  />
                </li>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

{
  /* <table>
<thead>
  <tr>
    <th>Pictures</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Action</th>
  </tr>
</thead>
<tbody> */
}
