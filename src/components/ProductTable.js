import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
    console.log(`I am a product table with the props...`)
    console.log(props.products)
    return (
        <>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
                {props.products.map(product => {
                    return <ProductRow name={product.name} price={product.price} stocked={product.stocked}/>
                })}
        </table>

        </>
    )
}