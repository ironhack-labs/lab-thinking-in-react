import React, {Component} from 'react'

import data from '../data.json'

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilteableProductTable extends Component{

  constructor(props){
    super(props)

    this.state = {
      textFilter: '',
      inStock: false
    }

  }

  filterText = (filterText)=>{
    this.setState({
      textFilter: filterText 
    })
  }

  render(){
    return(
      <div>
        <SearchBar 
          products={data}
          filterText={this.state.textFilter}
          onFilterTextChange={this.filterText}
          />
        <ProductTable 
        products={data}
        filterText={this.state.textFilter}
        />
      </div>
    );
  }

}