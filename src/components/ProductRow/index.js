import React from 'react'
import './style.css'

export default function index({ name, price }) {
    return (
        <tr>
            <td className='table-info'>{name}</td>
            <td className='table-info'>{price}</td>
        </tr>
    )
}
