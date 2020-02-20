import React from 'react';
import ProductRow from './ProductRow';



export default function ProductTable({products}) {
  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product, i) => 
              <tr key={i}>
                <ProductRow 
                    name={product.name}
                    price={product.price} />
              </tr>
            )}
          </tbody>
        </table>
      </div>
  )
}
