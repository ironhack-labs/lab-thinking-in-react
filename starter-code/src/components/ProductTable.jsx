import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable({products}) {
    
    return (
        <table className="tableItem">
            <thead className="tableHead">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody className="tableBody">
                {products.map((product,i) => (
                    <ProductRow name={product.name} price={product.price} key={i} stocked={product.stocked} />
                ))}
            </tbody>
            
        </table>
    )
}
