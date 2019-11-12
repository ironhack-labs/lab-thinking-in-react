import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {

  render() {
    const { products, searchFunction, onStock } = this.props;
    return(
      <div className="FilterableProductTable">
        <h1>IronStore</h1>
        <div className="uk-width-2-3 uk-container">
          <Searchbar searchFunction={searchFunction} onStock={onStock} />
        </div>
        <div className="uk-width-2-3 uk-container">
          <ProductTable products={products}/>
        </div>
      </div>
    )
  }
}