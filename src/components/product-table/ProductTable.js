import React from "react";
import "./ProductTable.css";
import ProductRow from "./product-row/ProductRow";

const ProductTable = ( {products} ) => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <ProductRow products={[...products]} />
        </tbody>
    </table>
);

export default ProductTable;