import React from 'react'

const ProductRow = (props) => {
  return (
    <div className="product-row">
      <h2>ProductRow</h2>
      <table>
        <thead></thead>
        <tbody>
          <tr><td>{props.name}{props.price}</td></tr>
          <tr><td>{props.name}{props.price}</td></tr>
          <tr><td>{props.name}{props.price}</td></tr>
          <tr><td>{props.name}{props.price}</td></tr>
          <tr><td>{props.name}{props.price}</td></tr>
          <tr><td>{props.name}{props.price}</td></tr>
          <tr><td>{props.name}{props.price}</td></tr>
          <tr><td>{props.name}{props.price}</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductRow;