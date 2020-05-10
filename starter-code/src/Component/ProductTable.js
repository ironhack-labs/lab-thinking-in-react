import React from 'react';
import ProductRow from "./ProductRow"

const ProductTable = props => {

        return (
            <>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                {props.products.map(product => (<ProductRow key={product.id} name={product.name} price={product.price} stocked={product.stocked}/>))}
                </tbody>
            </table>
            </>
        )

}

export default ProductTable 