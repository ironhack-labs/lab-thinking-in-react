import React from "react";
import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

class FilterableProductTable extends React.Component {
  state = {
    searchQuery: "",
    stockQuery: false,
    items: this.props.products
  };

  updateSearchQuery = newquery => {
    this.setState({
      searchQuery: newquery
    });
  };

  updateCheckbox = checkboxquery => {
    this.setState({
      stockQuery: checkboxquery
    });
  };

  render() {
    return (
      <div>
        <h1> IronStore </h1>
        <SearchBar updateInput={this.updateSearchQuery} updateStockCheck={this.updateCheckbox}/>
        <ProductTable
          products={this.props.products}
          search={this.state.searchQuery}
          stock={this.state.stockQuery}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
