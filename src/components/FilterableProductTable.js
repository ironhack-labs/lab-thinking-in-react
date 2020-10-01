import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json';

export class FilterableProductTable extends Component {
  state = {
    products: data,
    search: '',
    inStock: false
  };

  setSearch = search => {
      this.setState ({
          search: search
      });
  }

  setCheckbox = status => {
      this.setState ({
          inStock: status
      })
  }

  render() {
    console.log(this.state.search);
    return (
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"80%"}}>
        <h1 >IRONSTORE</h1>
        <SearchBar 
        setsearch={this.setSearch} 
        search={this.state.search} 
        setCheckbox={this.setCheckbox} 
        inStock={this.state.inStock} />
        
        <ProductTable 
        products={this.state.products} 
        filter={this.state.search} 
        inStock={this.state.inStock}/>
      </div>
    );
  }
}

export default FilterableProductTable;