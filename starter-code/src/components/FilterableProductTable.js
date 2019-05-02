import React from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './FilterableProductTable.css';

class FilterableProductTable extends React.Component {
   
  render() {
    return (
      <div className="mainTable">
      <h1>Iron Store</h1>
          <SearchBar></SearchBar>
          <ProductTable product={this.props.products.data}></ProductTable>
     
        
      </div>
    )
  }
}

export default FilterableProductTable;