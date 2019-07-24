import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import ProductTable from '../ProductTable/ProductTable.js';

import './FilterableProductTable.css';

class FilterableProductTable extends Component {

constructor(props){
  super(props)
  this.state = {searchTerm:''}
}

searchProduct = (event)=>{
  console.log("search this");
  this.setState({searchTerm: event.target.value},  
    ()=> {console.log("from child searchBar " + this.state.searchTerm)}
  )
}

  render(){

    return (
      <div className="yellowborder">
        <div>IronStore</div>
        <SearchBar searchFunc={this.searchProduct}/>
        <ProductTable dataarray= {this.props.products.data} mysearchterm={this.state.searchTerm}/>
        
      </div>
    )
  }

}

export default FilterableProductTable;