import { useState } from "react";
import ProductRow   from "./ProductRow"; 

function ProductTable(props) {
    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map(product => <ProductRow key={product.id} name={product.name} price={product.price} inStock={product.inStock} />)}
            </tbody>
        </table>
    );
}

export default ProductTable;