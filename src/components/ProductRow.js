import { useState } from 'react';
import './ProductRow.css';

function ProductRow (props) {
  const { product} = props;
  
  function checkProductInStock (avaliability) {
    if (avaliability = "false" {
      return <span className="red">{product.name}</span>;
    } else {
      return <span className="black">{product.name}</span>;
    }
  }

  return(
    <table>
  <tr>
    <th>Name</th>
    <th>Price</th>
  </tr>
    {products.map(product=> {
      return ( 
<tr key={product.id}>
    <td>{checkProductInStock{inStock}}</td>
    <td>{product.price}</td>
  </tr>
  )}   
  </table> 
  )
}


export default ProductRow