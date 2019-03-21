import React, { Component } from 'react'
import ProductRow from './ProductRow'

const ProductTable = props => {
    return (
        <table className="table-container">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        props.products.map((product, index) => <ProductRow key={index} {...product}/>)  
                    }
                    </tbody>

        </table>
    )
}  

export default ProductTable