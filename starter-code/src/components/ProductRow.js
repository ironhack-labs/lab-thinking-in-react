import React, { Component } from 'react'
import './Productrow.css'


export default class ProductRow extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="columns">

          <div className="column">
            <p>{this.props.product.name}</p>
          </div>

          <div className="column">
            <p>{this.props.product.price}</p>
          </div>

        </div>

        <p>{(this.props.product.stocked) ? 'On Stock' : 'Out of Stock'}</p>
      </React.Fragment>
    )
  }
}
