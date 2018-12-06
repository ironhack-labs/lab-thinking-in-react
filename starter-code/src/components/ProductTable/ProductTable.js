import React, { Component } from 'react'
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow'
import ProductRow from '../ProductRow/ProductRow'
import Products from '../../data.json'

export default class ProductTable extends Component {
  constructor(){
    super()
    this.state = {
      AllProducts: Object.values(Products)[0],
     filteredProducts: null
    }
  }
  componentWillMount=()=>{

    const filterReduce = this.state.filteredProducts;

    this.state.AllProducts.forEach( e => {
    if(filterReduce[e.category]){
     filterReduce[e.category].push(e)
    }else {
     filterReduce[e.category] = [e]
    }
    
  })
  }
  render() {
    return (
      <div>
         <table>
           <thead>
             <tr>
               <th>
                 Name
               </th>
               <th>
                 Price
               </th>
             </tr>
           <ProductCategoryRow filteredProducts={}/>
           </thead>
          <ProductCategoryRow/>
          <ProductRow/>
          </table>
      </div>
    )
  }
}
