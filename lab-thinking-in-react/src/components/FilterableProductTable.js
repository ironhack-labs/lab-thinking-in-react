import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import data from "../data.json";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.data,
      filtered: false
    };
  }

  search(val) {
    let filter = data.data.filter(e => {
      return e.name.toLowerCase().includes(val);
    });
    this.setState({ products: filter });
  }

  checkBox(val) {
    if (this.state.filtered === false) {
      let filter = data.data.filter(e => {
        return e.stocked === true;
      });
      this.setState({ products: filter, filtered: true });
    } else {
      this.setState({ products: data.data, filtered: false });
    }
  }

  render() {
    return (
      <table>
        <tr>
          <SearchBar
            search={e => this.search(e)}
            checkBox={e => this.checkBox(e)}
          />
        </tr>
        <tr>
          <ProductTable data={this.state.products} />
        </tr>
      </table>
    );
  }
}
export default FilterableProductTable;
