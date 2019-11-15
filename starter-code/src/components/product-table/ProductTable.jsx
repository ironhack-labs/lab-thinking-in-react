import React, { Component } from 'react'
import ProductRow from "../product-row/ProductRow"

export default class ProductTable extends Component {
  
  // return a row with each product name and price
  displayProductRow = () => {
    return this.props.productsArrP2.map((product, i) => {
      return(
        <ProductRow key={i} productName={product.name} productPrice={product.price} />
      )
    });
  }
  
  render() {
    // console.log("rendering")
    // console.log("ProductTable.jsx", this.props.productsArrP2)


    return (
      <div>

        <table className="table is-fullwidth">
          {/* heading titles */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          {/* footer */}
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </tfoot>
          <tbody>
            {this.displayProductRow()}
          </tbody>
        </table>

        
      </div>
    )
  }
}
