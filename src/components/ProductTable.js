import React, { Component } from 'react';
import ProductRow from './ProductRow';


export default class ProductTable extends Component {

    render() {
        const productsList = this.props.products
        // console.log(productsList)

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            {productsList.map((product) => {
                return (
                    <ProductRow product={product} key={product.id}/>
                )
            })}
        </table>
    )
    }

}