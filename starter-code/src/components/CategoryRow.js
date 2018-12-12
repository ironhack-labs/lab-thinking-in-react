import React, { Fragment } from 'react'
import ProductRow from './ProductRow'

const CategoryRow = ({ category, products }) => (
    <Fragment>
        <tr>
            <th colSpan='2'>{category}</th>
        </tr>
        {products.filter((product) => product.category === category)
            .map((product, index) => {
                return <ProductRow product={product} key={index} />
            })}
    </Fragment>
)

export default CategoryRow