import React, {useState} from 'react';
import './ProductRow.css'

const ProductRow = (props) => {
  return (
    <tbody>
    {!props.searching ?
    props.data.products.map((items) => (
      <tr key={items.id}>
      {items.stocked ? 
      <th className="normaltext">{items.name }</th>
      :
      <th className="redtext">{items.name }</th>
    }

      <th>{items.price}</th>
      </tr>
    )):
    props.filtered.map((items) => (
      <tr key={items.id}>
      {items.stocked ? 
      <th className="normaltext">{items.name }</th>
      :
      <th className="redtext">{items.name }</th>
    }
      <th>{items.price}</th>
      </tr>
    ))
    } 
    </tbody>
  );
}

export default ProductRow;