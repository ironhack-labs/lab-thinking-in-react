import React, { Component } from 'react';
import SearchBar from '../components/searchBar/SearchBar'
import ProductTable from '../components/productTable/ProductTable'
import data from '../data.json'


class FilterableProductTable extends Component {
state = {
  productsAll: data.data
}

filterListData = (filtro) => {

  let newState = {...this.state}
  

 
  newState = newState.productsAll.filter((item) => {
    debugger
      return item.name.toLowerCase().includes(filtro.toLowerCase());
  });
  

  this.setState(newState);
 };

 render (){
   return(
     <div>
       <SearchBar searchFunction={this.filterListData} />
       <ProductTable productsProps={this.state.productsAll} />
     </div>
   )
 }
}

export default FilterableProductTable 