import React from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {
    const productList = props.products;
    console.log("productList: ", productList)
  return (
    <div>
        <table className="productTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        <ProductRow productList={productList}/>
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable