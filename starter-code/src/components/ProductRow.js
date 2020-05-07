import React, { Component } from 'react';

class ProductRow extends Component {
 
  render() {
    const filtered = this.props.products.filter(product => {
      console.log(this.props)
      return this.props.isStocked
      ? product.name.toLowerCase().includes(this.props.query.toLowerCase()) &&
          product.stocked
      : product.name.toLowerCase().includes(this.props.query.toLowerCase());
    })
    console.log(this.props.query)
    return (
      <tbody>
       {filtered.map((product, i) => {
            return (
              <tr style = {product.stocked ?  {color :"black"} :  {color :"red"}} key={i}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
            </tbody>
            );
    
  }
}

export default ProductRow;