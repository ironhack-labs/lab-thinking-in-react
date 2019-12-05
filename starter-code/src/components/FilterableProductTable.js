import React, { Component } from 'react';
import '../App.css';

import data from '../data.json'

import SearchBar from './SearchBar'
import  ProductRow from './ProductRow'
import ProductTable from './ProductTable';


class FilterableProduct extends Component {

  constructor(props) {
    super(props)
    this.state = {

        data: data.data,
        backup: data.data,

    }
    }

    filterProduct = (src) => {

        let filteredCopy = [...this.state.backup]
        filteredCopy = filteredCopy.filter(e => e.name.toUpperCase().includes(src.toUpperCase()))
        
        this.setState({data: filteredCopy})
    }

render() {
    return (

      <>
        <h1>IronStore</h1>

        <SearchBar searchBar={this.filterProduct}/>

        <ProductTable data={this.state.data}/>

        {/* <div>
            { this.state.data.map((elm,idx) => <ProductRow {...elm} key={idx} />) }
        </div>
  */}
      </>
  )

  }
}

export default FilterableProduct