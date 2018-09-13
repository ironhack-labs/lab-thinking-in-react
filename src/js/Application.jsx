import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import products from "./data";

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: products.data,
      searchQuery: ""
    };

    this._onlyInStock = this._onlyInStock.bind(this);
    this._handlechange = this._handlechange.bind(this);
  }
  render() {
    return (
      <div className="application">
        <SearchBar
          onlyInStock={this._onlyInStock}
          handleChange={this._handlechange}
        />
        <ProductTable items={this.state.items} />
      </div>
    );
  }

  _handlechange(event) {
    if (event) {
      const productData = products.data.filter(el => {
        return (
          el.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
        );
      });
      this.setState({
        items: productData,
        searchQuery: event.target.value
      });
    } else {
      const productData = products.data.filter(el => {
        return (
          el.name.toLowerCase().search(this.state.searchQuery.toLowerCase()) !==
          -1
        );
      });
      this.setState({
        items: productData
      });
    }
  }

  _onlyInStock(event) {
    if (event.target.checked) {
      const newProducts = this.state.items.filter(el => {
        return el.stocked;
      });
      this.setState({
        items: newProducts
      });
    } else {
      this._handlechange();
    }
  }
}

export default Application;
