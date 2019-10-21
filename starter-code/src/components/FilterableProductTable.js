import React, { Component } from 'react';

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default class FilterableProductTable extends Component {
  constructor(props) {
      super(props)
      this.state = {
          products: this.props.products.data,
          onlyStock : false,
          searchString: ""
      };
  }

  handleSearch = (e) => {
    let { name, value, type, checked } = e.target;
    console.log('target', e.target)
    value = (type === "checkbox") ? checked : value;
    this.setState({ [name]: value})
}

searchProducts = () => {
    if(this.state.onlyStock){
        return this.state.products.filter(elem => (RegExp(this.state.searchString, "i").test(elem.name) && elem.stocked));
    } else {
        return this.state.products.filter(elem => (RegExp(this.state.searchString, "i").test(elem.name)));
    }
}

render() {
    return(
        <div>
            <SearchBar searchString={this.state.searchString} onlyStock={this.state.onlyStock} handleSearch={e => this.handleSearch(e)}/>
            <ProductTable products={this.searchProducts()} />
        </div>
    )
  }
}
