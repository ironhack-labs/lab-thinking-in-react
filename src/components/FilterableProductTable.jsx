import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

export default class FilterableProductTable extends Component {

 
state = {
  products: this.props.products
}

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        {console.log(this.props.products)}
        <SearchBar />
        <ProductTable products={this.state.products}/>
      </div>
    );
  }
}
