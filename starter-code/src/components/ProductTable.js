import React from 'react'
import ProductRow from './ProductRow';

const ProductTable = ({products}) => {
 return(
   <table className="table">
    <thead className="thead-light">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
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