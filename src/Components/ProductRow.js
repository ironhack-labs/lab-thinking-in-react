import React, { Component } from 'react'

export class ProductRow extends Component {
    render() {
        return (
            <React.Fragment>
        <tr>
            <td style={{color:this.props.product.stocked === true ? "black":"red"}}>{this.props.product.name}</td>
            <td>{this.props.product.price}</td>
        </tr>
        </React.Fragment>
       
        )
    }
}

export default ProductRow
