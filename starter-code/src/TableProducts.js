import React, { Component } from 'react';
import './TableProducts.css';
import Product from './Product';

export default class TableProducts extends Component {
    render() {
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
                        {this.props.filteredProducts.map((feature,idx) => <Product name={feature.name} price={feature.price} key={idx}></Product>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
