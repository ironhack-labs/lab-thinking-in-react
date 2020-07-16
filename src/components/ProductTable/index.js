import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProductRow from '../ProductRow'
import './style.css'

export default function index({ products }) {
    return (
        <table className="books-table">
            <thead>
                <tr className="books-table-header" >
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products && products.map(({ name, price }) =>
                    <ProductRow key={uuidv4()} name={name} price={price} />
                )}
            </tbody>
        </table>
    )
}
