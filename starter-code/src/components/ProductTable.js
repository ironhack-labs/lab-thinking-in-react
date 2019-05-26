import React from 'react'
import ProductRow from './ProductRow';

const ProductTable = ({products}) => {
 return(
   <table>
    <thead>
      <tr>
        <th colSpan="2">Name</th>
        <th colSpan="2">Price</th>
      </tr>
    </thead>
    <tbody>
      {products && products.map((a,i) => <ProductRow {... a} key={i}/>)}
    </tbody>
   </table>
  // <div>

  // </div>
 )
}

export default ProductTable