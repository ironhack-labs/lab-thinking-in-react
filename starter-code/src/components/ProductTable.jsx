import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {
        props.data.length === 0 ? 
        <tr className="no-matches">
          <td>No matches found.</td>
          <td>--</td>
        </tr> :
        props.data.map((el, idx) => <ProductRow key={idx} {...el} />)
        }
      </tbody>
      
    </table>
  )
}

export default ProductTable;
