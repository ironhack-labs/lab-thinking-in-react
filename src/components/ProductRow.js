import React from 'react'
import '../App.css';

export default function ProductRow(props) {
    
    return (
        <>
            {props.products.map(product => {
                {/* let color = '';
                if (product.stocked === false) {
                    color = "red";
                    console.log(color)
                } */}
                return (
                    <tr key={product.id} className={!product.stocked && "red"}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                )
            })}
        </>
    )
}