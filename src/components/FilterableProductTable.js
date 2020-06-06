import React from 'react';
import data from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'



class FilterableProductTable extends React.Component {

  state = {
searchTerm: "",
onlyInStock: false,
  }

  searchHandler = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm 
    })
  }

  checkboxHandler = (event) => {
   this.setState({
     onlyInStock: event
   })
  }

  render() {

    return (
      <div>
<SearchBar searchHandler={this.searchHandler} currentSearchTerm={this.state.searchTerm} checkboxHandler={this.checkboxHandler} ></SearchBar>
<ProductTable searchTerm={this.state.searchTerm} onlyInStock={this.state.onlyInStock} ></ProductTable>



      </div>
    )
  }

}


export default FilterableProductTable;