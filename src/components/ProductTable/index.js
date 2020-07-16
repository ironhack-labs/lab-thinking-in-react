import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProductRow from '../ProductRow'
import './style.css'

export default function index({ products }) {
    return (
        <table className="products-table">
            <thead>
                <tr className="products-table-header" >
                    <th className="table-header-label">Name</th>
                    <th className="table-header-label">Price</th>
                </tr>
            </thead>
            <tbody>
                {products && products.map(({ name, price, stocked }) =>
                    <ProductRow key={uuidv4()} name={name} price={price} stocked={stocked} />
                )}
            </tbody>
        </table>
    )
}
