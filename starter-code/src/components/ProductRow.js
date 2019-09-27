import React from 'react';
import data from '../data.json';

const ProductRow = props => {
  const products = data.data.filter(word => word.name.toLowerCase().includes(props.query.toLowerCase())).map(product => {
    // console.log(data.data[1].name);
    //console.log("ProRow: " + props.query)
  
    
  
    return (
      <tr key={product.name}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  });

  return <>{products}</>;
};

export default ProductRow;
