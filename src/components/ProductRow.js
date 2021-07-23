import React from 'react';
import './ProductRow.css';


function ProductRow(props) {
  return (
    <tbody>
      {props.filteredRow.map((el)=>
      <tr key={el.id}>
        <td>{el.name}</td>
        <td>{el.price}</td>
      </tr>)}
    </tbody>
  )
}

export default ProductRow;