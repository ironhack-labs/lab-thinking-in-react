import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        return (
            <React.Fragment>
                <tr>
                    {this.props.product.stocked ? <td>{this.props.product.name}</td> : <td style={{color: 'red'}}>{this.props.product.name}</td>}
                    <td>{this.props.product.price}</td>
                </tr>
            </React.Fragment>
        )
    }
}
