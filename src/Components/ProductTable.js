import React from 'react'
import ProductRow from './ProductRow'


export default function ProductTable(props) {
    const filteredProducts = props.products.data.filter(p => {
        if(props.stock) {
            return p.name.toLowerCase().includes(props.query.toLowerCase()) && p.stocked
        } else {
            return p.name.toLowerCase().includes(props.query.toLowerCase())
        }
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stocked</th>
                </tr>
            </thead>
                <ProductRow products={ filteredProducts } />
        </table>
    )
}      