import React, { Component } from 'react';
import ProductRow from './ProductRow';


export default class ProductTable extends Component {

    render() {
        return (
            <>
                <table>
                    <tbody>
                        <tr >
                            <th >Name</th>
                            <th >Price</th>
                        </tr>
                        {this.props.products.map((product, idx) => <ProductRow key= {idx} {...product} />)}
                    </tbody>
                </table>
            </>
        )
    }
}