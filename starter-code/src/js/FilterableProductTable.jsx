import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import Data from "../data/data.json";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      data: Data,
      query: "",
      showOnlyStocked: false
    };

    this._handleQueryChange = this._handleQueryChange.bind(this);
    this._handleStockedFilter = this._handleStockedFilter.bind(this);
  }

  componentDidMount() {
    const categories = [...new Set(Data.map(item => item.category))];
    this.setState({ categories });
    this.setState({ data: Data });
  }

  render() {
    const productTable = (
      <ProductTable
        categories={this.state.categories}
        productData={this.state.data}
        query={this.state.query}
        showOnlyStocked={this.state.showOnlyStocked}
      />
    );
    return (
      <div>
        <SearchBar
          query={this.state.query}
          handleQueryChange={this._handleQueryChange}
          handleStockedFilter={this._handleStockedFilter}
          showOnlyStocked={this.state.showOnlyStocked}
        />
        {productTable}
      </div>
    );
  }

  _handleQueryChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  _handleStockedFilter(event) {
    this.setState({
      showOnlyStocked: event.target.checked
    });
  }
}

export default FilterableProductTable;
