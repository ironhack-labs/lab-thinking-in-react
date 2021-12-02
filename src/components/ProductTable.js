
import React, { Component } from 'react';
import ProductRow from './ProductRow';


function ProductTable(props) {
    return (
        <div className="App">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {props.products.map((eachProducts) => (
                        <ProductRow key={eachProducts.id} name={eachProducts.name} price={eachProducts.price} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}




export default ProductTable;
