import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import data from '../data.json';

export default class FilterableProductTable extends Component {
  state = {
    allProducts: data.data,
  };
 handleNewSearch=(search)=> {
if(!search){
  this.setState({
    allProducts:data.data
  })
  
}else{

   console.log(search)

   const copyData = [...this.state.allProducts]

  // console.log(copyData[0].name)
  this.setState({ 
  
  allProducts:copyData.filter((obj,i)=> {

  return(
  obj.name.includes(search))


})})}



 }


  handleFilter = (check) => {
    if (check) {
      const copyData = [...this.state.allProducts]
      this.setState({
        allProducts:copyData.filter((obj) => {
          return obj.stocked
        })
      })
    } else {
      this.setState({
        allProducts:data.data
      })
    }
  }
 
  render() 
  { console.log(this.state.allProducts)
    return (
      <div>
        <center>
          <h1>IronStore</h1>
        </center>
        <SearchBar handleSearch={this.handleNewSearch} handleCheckBox={this.handleFilter} ></SearchBar>
        <ProductTable productList = {this.state.allProducts} />
      </div>
    );
  }
}
