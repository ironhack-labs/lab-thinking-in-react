import React from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {
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
                                        {props.products.map((product, index) => {
                                                return (
                                                        <ProductRow
                                                                key={index}
                                                                name={product.name}
                                                                price={product.price}
                                                                stocked={product.stocked}
                                                        />
                                                )
                                        })}

                                </tbody>
                        </table>
                </div>
        )
}

export default ProductTable
