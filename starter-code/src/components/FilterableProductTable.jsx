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
  
  newState.productsAll = newState.productsAll.filter((item) => {
  /*   debugger */
      return item.name.toLowerCase().includes(filtro.toLowerCase());
  });
  

  this.setState(newState);
 };


//  filterListFood = (filtro) => {
 
//   const newState = { ...this.state };

//   newState.foodsAll = newState.foodsAll.filter((food) => {
//       return food.name.indexOf(filtro) != -1;
//   });
//   this.setState(newState);
// };

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