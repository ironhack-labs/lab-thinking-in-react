import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      currentButtonState: false
    };
  }

  handleChange(event) {
    const { value } = event.target;

    console.log("VALUE: ", value);
    this.setState({ query: value });
  }

  inStock(event) {
    const lastButtonState = this.state.currentButtonState;
    this.setState({ currentButtonState: !lastButtonState });
  }

  render() {
    console.log("PRODUCTS IN FILTERABLE: ", this.props.products);
    return (
      <section className="FilterableProductTable">
        <h2>IronStore</h2>
        <SearchBar
          changeHandler={event => this.handleChange(event)}
          buttonState={event => this.inStock(event)}
        />
        <ProductTable
          products={this.props.products}
          queryString={this.state.query}
          inStock={this.state.currentButtonState}
        />
      </section>
    );
  }
}

export default FilterableProductTable;
