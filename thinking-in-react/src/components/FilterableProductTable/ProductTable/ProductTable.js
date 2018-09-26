import React from 'react';
import './ProductTable.css';

import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow';
import ProductRow from './ProductRow/ProductRow';

const ProductTable = (props) => {

    const { goodsList } = props;
    const categories = goodsList.map( good => good.category )
        .filter((cat, id, arr) => arr.indexOf(cat) === id);

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
            {
                categories.map((cat, id) => (
                        <ProductCategoryRow key={ cat + id } category={ cat } />
                    )
                )
            }
            </tbody>
        </table>


        <ProductRow/>
    </div>
    );
};

export default ProductTable;