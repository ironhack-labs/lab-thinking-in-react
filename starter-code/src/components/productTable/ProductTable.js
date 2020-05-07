import React from 'react';
import ProductRow from './productRow/ProductRow'

const ProductTable = props => {

        return (
            <>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                {props.products.map((elm, idx) => (<ProductRow key={idx} name={elm.name} price={elm.price} stocked={elm.stocked}/>))}
                </tbody>
            </table>
            </>
        )

}

export default ProductTable