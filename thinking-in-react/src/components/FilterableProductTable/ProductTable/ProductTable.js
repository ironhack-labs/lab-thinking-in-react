import React, { Fragment } from 'react';
import './ProductTable.css';

import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow';
import ProductRow from './ProductRow/ProductRow';

const ProductTable = (props) => {

    const { goodsList } = props;
    const categories = goodsList.map( good => good.category )
        .filter((cat, id, arr) => arr.indexOf(cat) === id);

    return (
    <div className="tableDiv">
        <table className="main-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {
                categories.map((cat, id) => (
                    <Fragment key={ cat + id }>
                        <ProductCategoryRow  category={ cat } />
                        {
                             goodsList.map( (g, id) => {
                                if(g.category === cat) {
                                    return (
                                        <ProductRow key={ id + g.name } {...g}/>
                                    )
                                }
                            })
                        }
                    </Fragment>
                    )
                )
            }
            </tbody>
        </table>
    </div>
    );
};

export default ProductTable;