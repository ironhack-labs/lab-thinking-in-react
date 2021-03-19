import React from 'react';


const ProductRow = ({id, name, price, inStock}) =>{
  let color = inStock?'black':'red';
  return(
    <tr style={{color: color}} key={id}><td>{name}</td><td>{price}</td></tr>
  )
}

export default ProductRow;