import React from 'react'

export default function ProductRow(props) {
    return (
        <>
        {props.products.map(product=>{
            return (
                <tr style={{color:`${product.stocked ? "black" : "red"}`}}>
                <th>{product.name}</th>
                <th>{product.price}</th>
            </tr>
            )
        })}
           
        </>
    )
}
