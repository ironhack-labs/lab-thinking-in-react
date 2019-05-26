import React from 'react'
import '../App.css'

export default (props) => (
  <div className={" " + (!props.product.stocked ? 'red' : '')}>
    {props.product.name}
    &nbsp;
    {props.product.price}
  </div>
)