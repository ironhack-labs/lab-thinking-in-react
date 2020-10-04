import React from 'react';
import ProductRow from './ProductRow';
import './ProductTable.css'

function ProductTable(props) {    
    const productLi = props.products.map(product => {
        return <ProductRow product={product} />
    });

    return (
        <table className="ProductTable">
            <tbody>
                <tr className="head">
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {productLi}
            </tbody>
        </table>
    );
};

export default ProductTable;