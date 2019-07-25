import React, { Component } from 'react';
import ProductTable from '../ProductTable/ProductTable'
import SearchBar from '../SearchBar/SearchBar'
import './FilterableProductTable.css'

class FilterableProductTable extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      data: [...props.products],
      filterData: [...props.products],
    }
  }

  search(e) {
    const {value} = e.target
    const filterArr = [...this.state.data].filter(word => {
      return word.name.includes(value)
    })
    this.setState({
      filterData: filterArr
    })
  }


  render(){
    return(
      <div className="container">
        <h1 className="main-title">IronStore</h1>
        <SearchBar onChange={(e) => this.search(e)}/>
        <ProductTable items={this.state.filterData} />
      </div>
    )
  }

}

export default FilterableProductTable