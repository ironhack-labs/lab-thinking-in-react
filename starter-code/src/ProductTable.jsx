import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
    render() {

        console.log(this.props);

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.products.length === 0 ?
                            (<tr><td>No item available</td></tr>)
                            :
                            (this.props.products.map((item, index) =>
                                <ProductRow key={index} name={item.name} price={item.price} stocked={item.stocked} />
                            ))
                    }
                </tbody>
            </table>
        )
    }
}
