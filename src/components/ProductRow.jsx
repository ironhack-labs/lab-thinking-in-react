import React, { Component } from 'react'

export class ProductRow extends Component {
    render() {
        return (
            <div>
                {this.props.product.map((product) => {
                return (
                  <tr>
                    <td>
                      <h2>{product.name}</h2>
                    </td>
                    <td>
                      <h2>{product.price}</h2>
                    </td>
                  </tr>
                );
              })}
            </div>
        )
    }
}

export default ProductRow
