import {useState} from 'react'
import dataJson from './../data.json'

const ProductRow = (props) => {
    return (
        <tbody>
        {props.products.map(element => {
            return (
                    <tr key={element.id}>
                        {element.inStock ? <td>{element.name}</td> : <td style={{color: 'red'}}> {element.name} </td> }
                        <td>{element.price}</td>
                    </tr>
            )
        })}
        </tbody>
    )
}

export default ProductRow