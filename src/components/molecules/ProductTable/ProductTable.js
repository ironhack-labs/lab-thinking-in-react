import React from 'react';
import { ProductRow } from '../../atoms';

const ProductTable = ({ products }) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {fillTable(products)}
                </tbody>
            </table>
        </div>
    );
}

function fillTable(products) {
    return products.data.map((product, index) => <ProductRow key={index} product={product} />);
}

export default ProductTable;