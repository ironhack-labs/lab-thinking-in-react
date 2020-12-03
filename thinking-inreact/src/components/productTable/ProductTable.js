import React, { Component } from 'react';
import ProductRow from '../productRow/ProductRow'

const ProductTable = ({products}) => {
    return (
        <table> 
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
    {products.map(elm => {return < ProductRow key = {elm.id} {...elm} /> } ) }

            </tbody>
        </table>
    )
}




export default ProductTable;