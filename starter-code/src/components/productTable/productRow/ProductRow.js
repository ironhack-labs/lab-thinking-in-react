import React from 'react'
import './ProductRow.css'


const ProductRow = ({name, price, stocked}) => {
    let stockedClass = ""
    // !stocked ? stockedClass="out-of-stock" : null
    if(!stocked) {
        stockedClass="out-of-stock"
    } 
    return (
        <>
        <tr>
            <td className={stockedClass}>{name}</td>
            <td className={stockedClass}>{price}</td>
        </tr>
        </>
    )
}

export default ProductRow
