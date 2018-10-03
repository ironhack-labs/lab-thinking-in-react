import React, {Component} from 'react';
import data from './data.json';
import './App.css';

export const ProductRow = (props) => {
  console.log(props.products)
  
    /* const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>; */

    return (
      props.products.map(product =>{
        return(
          <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
        )
      })
      
    );
  
  }

