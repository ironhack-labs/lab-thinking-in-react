import React from 'react';

const ProductRow = ({ data }) => {
  return (
    data.map((el, idx) => <tr key={idx}><td>{el.name}</td><td>{el.price}</td></tr>)
  )
}

export default ProductRow;