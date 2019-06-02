import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({products}) => (

  <table className="table mt-4 container">
    <thead className="thead-light">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>{console.log(products)}
      {products.map((product, i) => <ProductRow data={product} key={i}/>)}
    </tbody>
  </table>

);

export default ProductTable