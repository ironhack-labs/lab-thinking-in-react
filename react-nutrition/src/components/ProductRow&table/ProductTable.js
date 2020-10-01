import React, { Fragment } from 'react'
import ProductRow from './ProductRow'
import './ProductTable.css'


export default (props) => {

    const filteredProduct = props.data.filter(elm => !elm.stocked ? elm.stocked === props.checked : elm)

    return (
        <Fragment>
            <table className="products-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProduct.map(el => <ProductRow key={el.id} {...el} />)}
                </tbody>
            </table>
        </Fragment>
    )
}