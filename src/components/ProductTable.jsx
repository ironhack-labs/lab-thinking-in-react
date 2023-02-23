import React from 'react';
import ProductRow from "./ProductRow";

function ProductTable({ products, search }) {


    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </tbody>
            </table>
            {products
                .filter((product) => {
                    return product.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((newProduct) => {
                    return <ProductRow newProduct={newProduct} key={newProduct.name} />;
                })}
        </div>

    );
}

export default ProductTable;