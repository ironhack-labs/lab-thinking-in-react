import React from 'react'
import ProductRow from '../ProductRow/ProductRow'

function ProductTable({ products }) {
  return (
    <div>
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product) => (<ProductRow key={product.id} product={product}/>))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;