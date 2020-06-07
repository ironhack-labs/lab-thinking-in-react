import React, { Component } from 'react';

function ProductRow (props) {
    return(
        <div>
            {props.name}  {props.price}
        </div>

    )
}

export default ProductRow