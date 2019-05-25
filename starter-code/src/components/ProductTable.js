import React from 'react'
import ProductRow from './ProductRow'
export default (props) => {
return (
  <div>
    ProductTable
    {props.products.map((e,i)=>(
      <ProductRow product={e} key={i}/>
    ))}
  </div>
)}