import React from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component{

  render (){
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
         {this.props.products.map((product, idx)=>{
           return <ProductRow key={idx} productName={product}></ProductRow>
         })}
        </tbody>
      </table>
    )
  }
}