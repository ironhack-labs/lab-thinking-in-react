import React, { Component } from 'react';
import ProductRow from './ProductRow.jsx';


export default class ProductTable extends Component {

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr >
                            <th >Name</th>
                            <th >Price</th>
                        </tr>
                        {this.props.products.map(product => <ProductRow {...product} />)}
                    </tbody>
                </table>

            </div>
        )
    }
}
