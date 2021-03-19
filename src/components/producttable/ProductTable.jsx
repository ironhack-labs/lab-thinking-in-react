import React from 'react';
import ProductRow from '../productrow/ProductRow';

const ProductTable = ({products}) =>{
  return(
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {products.map(product =>{
          return <ProductRow key={product.id} inStock={product.stocked} name={product.name} price={product.price}/>
        })}
      </tbody>
    </table>
    
  )
}

export default ProductTable;