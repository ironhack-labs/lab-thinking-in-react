import React, { Component } from 'react'
import Product from '../Product/Product'




export default class ProductSection extends Component {


    render() {
        return (
            <div className="productSection">
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((product, idx) => <Product  key={idx} data={product}></Product>)}
 
                    </tbody>
                </table>
            </div>
        )
    };
}
