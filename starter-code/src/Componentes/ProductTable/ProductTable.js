import React, { Component } from 'react'
import ProductRow from '../ProductRow/ProductRow';


export default class ProductTable extends Component {


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
              this.props.filteredProducts.map((product, idx) => {
                return <ProductRow product={product} key={idx} />
              })
            }
          </tbody>
        </table>




      </React.Fragment>
    )
  }
}
