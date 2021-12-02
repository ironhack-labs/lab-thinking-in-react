import React from 'react'





function ProductRow(props) {


    return (
        <div className="ProductRow">
            <p>{props.product.name}</p>
            <p>{props.product.price}</p>
        </div>
    )

}

export default ProductRow