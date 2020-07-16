import React from 'react'
import './style.css'

export default function index({ name, price, stocked }) {

    return (
        <tr className="row">
            <td className={`product-info ${!stocked ? 'product-out' : ''}`}>{name}</td>
            <td className='product-info'>{price}</td>
        </tr>
    )
}
