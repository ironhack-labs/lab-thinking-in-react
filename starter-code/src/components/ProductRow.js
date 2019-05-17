import React from 'react';

const ProductRow = (props) => { 
    return (
      <tr>
        {props.stocked ? <td>{props.name}</td> : <td className="product-out-of-stock">{props.name}</td>}
        <td>
          {props.price}
        </td>
      </tr>
    );
  } 

export default ProductRow;