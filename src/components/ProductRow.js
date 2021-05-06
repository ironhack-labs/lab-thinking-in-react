import './ProductRow.css'
import React from 'react';


const ProductRow = ({ name, price }) => {

    return(
        <article>
        <h4>{name}</h4>
        <p>{price}</p>
        <hr/>
        </article>
    )
} 

export default ProductRow