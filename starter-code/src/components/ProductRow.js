import React from 'react'

const ProductRow = ({ name, price, idx }) =>

    <div className="row">
        <div className="col-md-6"><p>{name}</p></div>
        <div className="col-md-6"><p>{price}</p></div>
    </div>

export default ProductRow