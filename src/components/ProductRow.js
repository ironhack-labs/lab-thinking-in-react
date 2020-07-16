import React from 'react';
import { uuid } from 'uuidv4';

export default function ProductRow(props) {
  console.log(props);
  const allProducts = props.filtered.map((product)=> {
      
    
    console.log(product)
    return (
    
    <tr key={product.id}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>

  );
 });
 return <>{allProducts}</>;
};


