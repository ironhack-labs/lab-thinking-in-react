import React from 'react';
import ProductRow from './ProductRow';
import './ProductTable.css'



const ProductTable = (props) => {

    return (
        <table className="table">
            <thead>
                <tr className="row">
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((product) => {
                    return <ProductRow product={product}></ProductRow>
                })}
            </tbody>
        </table>
    )
}


export default ProductTable