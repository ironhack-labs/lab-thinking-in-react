import React, { Component } from "react";
import SearchBar from "../searchbar/SearchBar";
import ProductTable from "../productTable/ProductTable";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      productList: this.props.products.data,
      stockCheckbox: false,
    };
  }

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  updateCheckbox = e => {
    this.setState({stockCheckbox: e.target.checked})
  }

  render() {
    return (
      <div>
        Hello fine react developer {this.props.products.data[0].category}
        <h1 className="title is-h2">Iron Store</h1>
        <SearchBar search={this.handleSearch} value={this.state.search} check={this.updateCheckbox}/>
        <ProductTable
          products={this.state.productList.filter(item =>item.name.toUpperCase().includes(this.state.search.toUpperCase()))}
          showInstockOnly={this.state.stockCheckbox}
        />
      </div>
    );
  }
}

export default Main;
