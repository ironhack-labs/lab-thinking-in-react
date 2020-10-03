import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {    
    const productLi = props.products.map(product => {
        return <ProductRow product={product} />
    });

    return (
        <table className="ProductTable">
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {productLi}
            </tbody>
        </table>
    );
};

export default ProductTable;