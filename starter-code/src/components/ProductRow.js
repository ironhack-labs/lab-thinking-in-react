import React from 'react'
const uuidv4 = require('uuid/v4'); // provide unique key for array items

const ProductRow = (props) => {
  // Props Heritage: App.js > FilterableProductTable.js > ProductTable.js > ProductRow.js
  // Getting props: props < ProductTable < Filterable Products Table < App
  // console.log(`Props from ProductRow`, props.productsOnPT.productsOnFPT.productsOnApp.data);

  const getProducts = props.productsOnPT.productsOnFPT.productsOnApp.data.map(product => {
      return (
        <tr key={uuidv4()}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      )
    })

  return (
    <div className="product-row">
      <h2>ProductRow</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="table-body-items">
          { getProducts }
        </tbody>
      </table>
    </div>
  )
}

export default ProductRow;