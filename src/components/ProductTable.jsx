
import { useState } from 'react';
import ProductRow from './ProductRow'
import data from "../data.json"
import React from 'react'

export default function ProductTable(props) {
  const isInStock = data.InStock
  const [products, setProducts] = useState(data);


  return (
    <>
 <thead>
      <td>Name</td>
      <td>Price</td>
      </thead>
      {props.products.map(singleProduct => (
        <ProductRow singleProduct={singleProduct}/>
      ))}
    </>
  )
}

