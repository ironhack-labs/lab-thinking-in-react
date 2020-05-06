import React from 'react'
import ProductRow from './ProductRow'

function ProductTable({products, search, stock}) {

  let filteredArray=[]
  
  if(stock){
    filteredArray = products.filter(product=>{
     return product.name.toUpperCase().includes(search.toUpperCase()) && product.stocked
    })
  } else {
    filteredArray = products.filter(product=>{
     return product.name.toUpperCase().includes(search.toUpperCase())
    })
  }
  
  return (

    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {filteredArray.map((oneProduct, index) => (
          <ProductRow 
              key={index} 
              stocked={oneProduct.stocked} 
              name={oneProduct.name} 
              price={oneProduct.price} 
          />
        ))}
      </tbody>
    </table>

  )
}

export default ProductTable
