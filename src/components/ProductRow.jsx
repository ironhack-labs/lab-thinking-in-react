
import React, { useState } from 'react'
import SearchBar from './SearchBar'



export default function ProductRow({ singleProduct }) {
  console.log(singleProduct)
  return (
    <>
    <div className='row'>
      <table>
        <tr className='table' style={{ color: !singleProduct.inStock && 'red' }}>
          <td id='name' >{singleProduct.name}</td>
          <td id='price'>{singleProduct.price}</td>
        </tr>
      </table>
      </div>
    </>
  )
}