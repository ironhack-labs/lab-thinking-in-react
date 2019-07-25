import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        { 
          props.state.filter ? 
          props.filtered.map((item, idx) => { return <ProductRow key={idx} {...item} />}) : 
          props.data.map((item, idx) => { return <ProductRow key={idx} {...item} />})        
        }
      </tbody>
    </table>
  )
}

export default ProductTable