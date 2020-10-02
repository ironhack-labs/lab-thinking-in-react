import React, { Component } from 'react';

import ProductTable from '../productTable/ProductTable'
import SearchBar from '../searchBar/SearchBar'




class FilteredProductTable extends Component {
  constructor(props) {
      super(props)
      this.state = {
        info: props.products.data,
        search : ""

          
      }

  
        
        }
        
    filterState = word => {
        this.setState({search : word})
        const products = this.props.products.data
        let filter = products.filter(elem => elem.name.includes(word))
        this.setState({info : filter})

    }




  render(){

        console.log(this.props)
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar products = {this.props} search= {this.state.search} info={this.state.info}/>
        <ProductTable products= {this.props}/>  
      </div>
    );
  }

}

  
  

export default FilteredProductTable;