import React, { Component } from 'react'
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow'
import ProductRow from '../ProductRow/ProductRow'
import data from '../../data.json'
import SearchBar from '../SearchBar/SearchBar'

export default class ProductTable extends Component {
  constructor(){
    super();
    this.state = {
      dataList : data.data,
      word:""
    }
  }

 
  //  findProduct(listProducts){
  //   const listProducts=[...this.props.data];
  //   this.setState({...this.state, findProducts:listProducts.target.value})
  //   }
  
  render() {
    return (
      <div>
        <ProductCategoryRow data={this.state.dataList}/>
        <ProductRow data={this.state.dataList}/>
      </div>
    )
  }
}
