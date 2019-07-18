import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  
  render() {
    return (
      <div>
       <table className="table">
        <thead></thead>
        <tbody>
          {this.props.filteredProducts.map((listData,idx)=>
           <ProductRow filteredProducts = {listData} key={idx}></ProductRow> )}
         
        </tbody>
      </table>
      </div>
    )
  }
}
