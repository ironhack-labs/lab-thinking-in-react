import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import ProductTable from '../ProductTable/ProductTable.js';

import './FilterableProductTable.css';

class FilterableProductTable extends Component {

constructor(props){
  super(props);
  
  this.state = {searchTerm:'', categories: this.categoriesfunc() }
  console.log("from constructor  "+ this.categoriesfunc() );
}

searchProduct = (event)=>{
  console.log("search this");
  this.setState({searchTerm: event.target.value},  
    ()=> {console.log("from child searchBar " + this.state.categories)}
  )
}

categoriesfunc = ()=>{
  // let test = this.props.products.data[0].name;
  let categoryObject = {};
  for ( let i=0; i< this.props.products.data.length; i++){
    let x = this.props.products.data[i].category;
    // console.log("i th " + x);
    categoryObject[this.props.products.data[i].category] = true;
 
  }
  let arrayOfCAtegories = Object.keys(categoryObject);
  return arrayOfCAtegories;
}

  render(){

    return (
      <div className="yellowborder">
        <div>IronStore</div>
        <SearchBar searchFunc={this.searchProduct}/>
        <ProductTable 
              dataarray= {this.props.products.data}
              mysearchterm={this.state.searchTerm}
              categories={this.state.categories}
        />
        
      </div>
    )
  }

}

export default FilterableProductTable;