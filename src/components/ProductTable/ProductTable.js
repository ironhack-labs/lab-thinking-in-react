import React from 'react';
import ProductRow from '../ProdutcRow/ProductRow';

const ProductTable = ( {products} ) => {

    const displayProducts = allProducts => {
        return allProducts.map(oneProduct => <ProductRow product={oneProduct} />);
    }

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
                    {displayProducts(products)}
                </tbody>
            </table>
        </div>
    );
}
export default ProductTable;