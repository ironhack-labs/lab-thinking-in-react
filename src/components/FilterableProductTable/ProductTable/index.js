import React, {Component} from 'react'
import Data from './../../../data.json'
import ProductRow from './ProductRow'


const ProductTable = ({ filteredProducts }) => {
    const productRows = filteredProducts.map((elm, idx) => <ProductRow {...elm} key={idx} />)

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

