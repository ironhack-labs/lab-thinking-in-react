import React from 'react'
import ProductRow from './ProductRow'


export default function ProductTable(props) {
  const filteredProducts = props.allProductsProps.slice().filter(product => {
    if(props.inStockProps && !product.inStock){
      return false;
    }
    if(product.name.toLowerCase().includes(props.queryProps.toLowerCase())){
      return true;
    } 
  })
//console.log(filteredProducts)

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
      {filteredProducts.map(product => (
        <ProductRow productProps={product} key={product.id}/>
      ))}
      </tbody>
    </table>
    </div>
  )
}
