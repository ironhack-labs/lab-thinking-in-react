import React, { Component } from 'react';

const ProductTable = (props) => {



    const ProductRow = props.products.map((product, index) => {



        const changeColor = (product) => {
            return product.stocked ? "black" : "red"
        }
        console.log(changeColor)

        return (

            <tr key={index}>
                <td style={{ color: changeColor(product) }}>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    })

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {ProductRow}
                </tbody>
            </table>
        </div>
    )



}


export default ProductTable