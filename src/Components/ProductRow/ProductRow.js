import React from 'react';
import './ProductRow.css';

function ProductRow({name,price}) {
    
  return (
      <tr>
        <td className='columns'>{name}</td>
        <td className='columns'>{price}</td>    
    </tr>
  );
}

export default ProductRow;
