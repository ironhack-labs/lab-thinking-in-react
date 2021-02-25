import React, { Component } from 'react'
import ProductRow from '../components/ProductRow'

export default class ProductTable extends Component {
    render() {
        return (
            <div>
                <table style={{borderCollapse: "collapse", fontSize:"20px"}}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(item => (<ProductRow  key={item.id} product={item} />))}
                    </tbody>
                </table>
            </div>
        )
    }
}
