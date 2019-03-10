//"mother" component

import React, { Component } from 'react';
import data from '../data.json';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';


class FilterableProductTable extends Component {

  state = {

  };

  render() {

    //TODO: créer une fonction pour récupérer la valeur de la query du composant SearchBar
    return (
      <div>
        <h1>IronStore</h1>

        <SearchBar />

        <ProductTable />
      </div>
    )
  }

}





export default FilterableProductTable;