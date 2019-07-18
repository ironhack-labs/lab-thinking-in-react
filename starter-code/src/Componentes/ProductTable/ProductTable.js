import React, { Component } from 'react'
import ProductRow from '../ProductRow/ProductRow';


export default class ProductTable extends Component {
  state = {
    products: this.props.products
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.products.map((product, idx) => {
                return <ProductRow product={product} key={idx} />
              })
            }
          </tbody>
        </table>




      </React.Fragment>
    )
  }
}
