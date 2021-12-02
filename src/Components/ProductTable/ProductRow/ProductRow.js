import React from 'react'
import './ProductRow.css'


function ProductRow(props) {
    return(
        <div className="main-container-productrow">
            <div className="container-productrow">
                <h6 className="productrow-info">{props.product.name}</h6>
                <p className="productrow-info">{props.product.price}</p>
            </div>
        </div>
    )
}


export default ProductRow