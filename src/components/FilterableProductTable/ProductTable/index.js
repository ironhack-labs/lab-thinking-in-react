import React, { Component } from 'react'
import ProductRow from './ProductRow'



const ProductTable = ({ productsFiltered }) => {
    const productRows = productsFiltered.map((elm, idx) => <ProductRow {...elm} key={idx} />)

    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productRows}
                </tbody>
            </table>
        </section>
    )
}


export default ProductTable