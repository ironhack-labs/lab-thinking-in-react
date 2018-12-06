import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow'
import ProductRow from './ProductRow/ProductRow'


export default class ProducTable extends Component {

  render() {
    let categories = [];
    this.props.products.forEach(product => {
      if (!categories.includes(product.category))
        categories.push(product.category);
    })  
    return (
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category,i)=>{
            return (
              <React.Fragment key={i}>
            <ProductCategoryRow name={category}/>
            {this.props.products.filter((product)=>
            category==product.category)
            .map((prd,j) => {
              return (<ProductRow key={j} name={prd.name} price={prd.price} hasStock={prd.stocked}/>)}
            )}
            
          </React.Fragment>)
          }
            )}
        
        </tbody>
      </table>
    )
  }
}
