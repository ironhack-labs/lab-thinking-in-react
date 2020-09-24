import React from 'react'
import ProductRow from './ProductRow/ProductRow'

export default function ProductTable(props) {
    //  console.log("products in product table", props.products)
    const filtered = props.products.filter(contact => {
        if (props.tickQuery)
            return ((contact.name.toLowerCase().includes(props.query.toLowerCase())) && contact.stocked)
        else {
            return (contact.name.toLowerCase().includes(props.query.toLowerCase()))
        }
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map(product => {
                        return (
                            <ProductRow product={product}
                            />)
                    })}
                </tbody>
            </table>
        </div>
    )
}

