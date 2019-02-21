import React, { Component } from 'react';
import products from '../data.json'

export default class ProductRow extends Component {
  render() {
    const product = products['data'].filter(product => product.name === this.props.name)

    return (
      <div className='ProductRow'>
        <p>{product[0].name}</p> <p>{product[0].price}</p>
      </div>
    )
  }
}