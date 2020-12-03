import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    query: '',
    inStock: false,
  };

  setQuery = (input) => {
    this.setState({
      query: input,
    });
  };

  inStockProducts = () => {
      this.setState ({
          inStock: true
      })
  }

  render() {
    //console.log('this is in filterable product', this.props.products);
    return (
      <div>
        <SearchBar
            search={this.setQuery}
            inStock={this.state.inStock}
            inStockProducts={this.inStockProducts}
             />
        <ProductTable 
        products={this.props.products} 
        query={this.state.query}

         />
        {/* //{this.state.query} ->this is our updated input */}
      </div>
    );
  }
}
