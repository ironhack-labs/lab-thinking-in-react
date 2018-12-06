import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    return (
      <React.Fragment>
        {
          this.props.products.map(elem => (
          <tr>
            <td>{elem.name}</td>
            <td>{elem.price}</td>
          </tr>
          ))
        }

      </React.Fragment>
    )
  }
}
