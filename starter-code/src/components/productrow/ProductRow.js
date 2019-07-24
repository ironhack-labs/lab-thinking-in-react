import React from 'react';
import './productrow.css'

function ProductRow(props) {
  return (
    <div className={`Red Columns ${!props.isStocked && "RedText"}`}>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default ProductRow;