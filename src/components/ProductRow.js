import {Component} from 'react'
import React from 'react'
import './ProductTable.css'

const ProductRow = ({name, price}) => {
       
    return( 
        <article className='article'>
            <h3>{name}</h3>
            <h3>{price}</h3>
        </article>
    )
}

export default ProductRow