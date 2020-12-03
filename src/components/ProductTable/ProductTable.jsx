import React from 'react'
import ProductRow from '../ProductRow/ProductRow'

const ProductTable = (props) => {
    // console.log("TABLE", props.productsArray)
    const productsArray = props.productsArray
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
          {productsArray.map((product)=> {
            return <ProductRow key={product.id} productElement={product}/>
          })}
          </tbody>
          </table>
        </div>
    )
}

export default ProductTable
