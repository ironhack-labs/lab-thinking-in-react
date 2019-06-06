import React, { Component } from "react"
import ProductRow from "./ProductRow"


class ProductTable extends Component {

  constructor(props) {
    super(props)
  }



  render() {

    return (

      <div>

        <h1>ProductTable</h1>
        <div>
          <h4>Name</h4>
          <h4>Price</h4>
        </div>

        {
          this.props.products.map((product, idx) => {
            return (

              <div key={idx}>
                <ProductRow {...product} />
              </div>
            )
          })
        }
      </div>

    )
  }
}


export default ProductTable