import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import '../App.css';


class FilterableProductTable extends Component {
    
    
    render() {
      return (
        <div >
          <h1>ironStore</h1>
            {/* taking props from the parent */}
            <SearchBar onSearch={this.props.onSearch} checkBox={this.props.checkBox}/>
          <div>
            {/* this.props is all the parameters you get from the parent component attribute "products" */}
            {/* when using class component you have to write "this" */}
            <ProductTable products={this.props.products}/>
          </div>
        </div>
      );
    }
  }

  export default FilterableProductTable;