import React from 'react'
import ProductRow from './product-row'

function ProductTable({productData}) {

  return (
    <>
      <table className = 'table table-hover mx-3' >
        <thead  >
          <tr >
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
         
          {productData.map(product => (
            <ProductRow key={product.id} 
              product={product} 
            />
          ))}
            
          
        </tbody>
      </table>
    </> 
  )
}

export default ProductTable;