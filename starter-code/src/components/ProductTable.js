import React, { Component } from 'react'
import ProductRow from './ProductRow '

export default class ProductTable extends Component {
    render() {
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                Price
                            </td>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.products.map((product, idx) => (<ProductRow key={idx} {...product}></ProductRow>))}
                    </tbody>

                </table>
            </React.Fragment>
        )
    }
}
