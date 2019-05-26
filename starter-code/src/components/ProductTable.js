import React from 'react'
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  console.log(props)
  return (
    <div>
     <table className='table'>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
        <tbody>
          {
            props.products.map((recorredor, index) => {
              return <ProductRow productsData ={recorredor} key={index}/>
            })
          }
          
        </tbody>
      </table>
  </div>
  )
}

export default ProductTable