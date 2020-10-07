import React from 'react'


export default function ProductRow({productName, productPrice}) {

        return (
            <div>
                <tr>
                    <td>{productName}</td> <td>{productPrice}</td>
                </tr>
            </div>
        )
    
}
