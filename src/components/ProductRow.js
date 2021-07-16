import React from 'react'
import '../App.css';

export default function ProductRow(props) {

    return (
        <>
            {props.products.map(product => {

//                let color = '';
//                if (product.stocked === false) {
//                     color = "red";
//                     console.log(color)
//                 } else { color = "black" }

                return (
//                  <tr key={product.id} style={{ color: {!product.stocked ? "red" : black} }}> // not sure if it works
                    <tr key={product.id} className={!product.stocked ? "red" : undefined}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                )
            })}
        </>
    )
}

