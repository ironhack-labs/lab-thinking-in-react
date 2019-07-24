import React, { Component } from 'react';
import EachProduct from "../productrow/EachProduct.js"


class ShowAllProducts extends React.Component {




  showEachProduct = () => {
    return this.props.allVisibleProducts.map((eachProduct, i) => {
      return <EachProduct
        key={i}
        productName={eachProduct.name}
        productPrice={eachProduct.price}
      />
    })
  }


  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {this.showEachProduct()}
        </table>
      </div>
    )
  }
}




export default ShowAllProducts;