import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
  render() {
    return (
      <div id="table">
        <table>
          <thead>
            <tr>
            <th>
              Name
            </th>
            <th>
              Category
            </th>
            <th>
              Price
            </th>
            </tr>
          </thead>
          <tbody>
              {
              this.props.products.data.map((product, i) => {
                return <ProductRow product={product} key={i} />
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
