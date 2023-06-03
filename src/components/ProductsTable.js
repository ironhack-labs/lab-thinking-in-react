import React from 'react'
import ProductRow from './ProductRow'


function ProductsTable({products}) {
    
return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product,index) => (
            <ProductRow key={index} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable