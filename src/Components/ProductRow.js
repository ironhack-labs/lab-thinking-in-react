import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        
            return (
                <>
                <tr>
                    {/* <td style={{color:'red'}}>{this.props.product.name}</td> */}
                    {this.props.product.stocked ? <td style= {{color:'red'}}>{this.props.product.name}</td> : <td>{this.props.product.name}</td>}
                    <td>{this.props.product.price}</td>
                </tr>
                </>

            )        
    }        
}

