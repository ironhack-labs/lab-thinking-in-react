import React from 'react'
import data from '../../data.json'

const ProductRow  = ({name, price}) => {
    
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default ProductRow 
