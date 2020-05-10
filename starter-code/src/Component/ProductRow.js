import React, { Component } from 'react';


const ProductRow = ({name, price, stocked}) => {
    let stockedClass = ""
  
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