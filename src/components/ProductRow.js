import React, { Component } from 'react'

export class ProductRow extends Component {
constructor(props){
    super(props)
    this.state= {
        stock: false
    }
}
    render() {
        let {stock} = this.state;
        return (
                <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                </tr>            
            
        )
    }
}

export default ProductRow
