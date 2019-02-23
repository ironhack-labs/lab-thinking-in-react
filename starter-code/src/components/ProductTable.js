import React, { Component } from 'react';

const ProductTable = (props) => {

    const ProductRow = props.products.map((product, index) => {
        return (

            <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    })

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {ProductRow}
            </table>
        </div>
    )



}


export default ProductTable