import React from 'react'
import { useState } from 'react'
import JsonData from '../data.json';

 function ProductPage() {
     const [products,setProducts]=useState(JsonData)
  return (
      <div><h1>ProductPage</h1></div>
  )}
export default ProductPage