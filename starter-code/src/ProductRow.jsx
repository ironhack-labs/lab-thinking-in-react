import React from 'react'

export default function ProductRow({key, article}) {    
    return (
        <tr style={{color: article.stocked ? "black" : "red"}}>
            <td>{article.name}</td>
            <td>{article.price}</td>
        </tr>
    )
}
