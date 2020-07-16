import React from 'react'
import ProductRow from '../ProductRow'
import './style.css'

export default function index({ products }) {
    console.log(products)
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
                    <ProductRow name={name} price={price} />
                )}
            </tbody>
        </table>
    )
}
