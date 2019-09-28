import React from 'react';
import SearchBar from './SearchBar';
const uuidv4 = require('uuid/v4'); // provide unique key for array items

const ProductRow = (props) => {
  // Props Heritage: App.js > FilterableProductTable.js > ProductTable.js > ProductRow.js
  // Getting props: props < ProductTable < Filterable Products Table < App
  // console.log(`Props from ProductRow`, props.productsOnPT.productsOnFPT.productsOnApp.data);

  const productList = props.productsOnPT.productsOnFPT.productsOnApp.data;

  const getAllProducts =
    productList.map(product => {
    return (
      <tr key={uuidv4()}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    )
  });

  const getFilteredProducts = props => {
    console.log(props.stocked)
  }

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
          <>
            { getAllProducts }
          </>
        </tbody>
      </table>
    </div>
  )
}

export default ProductRow;