import React from 'react'
import ProductRow from "./ProductRow";

function ProductTable(props) {

  // console.log(props.search)
  // console.log(props.onlyStocked)
  // console.log(props.products)

  //Filters the products array if the products includes the search string state and if stocked === true
  let newArray = props.products.filter((product) => {
    if (product.name.toLowerCase().includes(props.search)) {
      return product;
    }
  });
  if (props.onlyStocked) {
    newArray = newArray.filter((product) => {
      if (product.stocked) {
        return product;
      }
    });
  }

  return (
    <div>
      <h1>Product Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow products={newArray} />
        </tbody>
      </table>
    </div>
  )
}


export default ProductTable;