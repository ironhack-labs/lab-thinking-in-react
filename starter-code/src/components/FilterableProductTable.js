import React, { Component } from 'react';
import data from '../data.json';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {




  render() {
    return (
      <div className="FilterableProductTable">
        <h1>IronStrore</h1>

        <form>
            <input type="" ></input>
        </form>
        <br/>

        <ProductTable/>
      

        
      </div>
    );
  }
}

export default FilterableProductTable