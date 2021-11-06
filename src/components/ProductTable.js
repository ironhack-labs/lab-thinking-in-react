import React from 'react';
import ProductRow from './ProductRow';
import "./ProductTable.css";

function ProductTable (props){
    return (
        <table className="ProductTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.productsList.map((product) => {
                    return (
                        <>
                        <ProductRow key={product.id} name = {product.name} price = {product.price} stocked={product.stocked}/>
                        </>
                    )
                })}

            </tbody>
        </table>
    )
}


export default ProductTable;