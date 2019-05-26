import React from 'react'
import 'bulma/css/bulma.css';

import ProductRow from './ProductRow'
export default (props) => {
return (
  <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((e,i)=>(
          <ProductRow product={e} key={i} index={i}/>
        ))}
      </tbody>
    </table>
  </div>
)}