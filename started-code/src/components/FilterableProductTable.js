import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

export class FilterableProductTable extends Component {
  constructor(){
    super();
    this.state = {
    }
  }


render() {
  return (
    <div>
      <div>
        <SearchBar></SearchBar>
      </div>

      <div>
        <ProductTable></ProductTable>
      </div>

    </div>
  )
}

}