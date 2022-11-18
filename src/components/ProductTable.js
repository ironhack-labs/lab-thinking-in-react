import React from 'react';
import ProductsRow from './ProductsRow';

function ProductTable(props) {
    const { productsToShow } = props;
    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <ProductsRow productsToShow={productsToShow} />
            </table>
        </div>
    );
}

export default ProductTable;