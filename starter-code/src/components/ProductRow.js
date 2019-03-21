import React from 'react'

const ProductRow = (props) => {
  return (
    <div className="container">
        <div className="row">
          <div className="col-6" style={props.colorStyle}>{props.name}</div>
          <div className="col-6" style={props.colorStyle}>{props.price}</div>
        </div>
      </div>
  )
}

export default ProductRow
