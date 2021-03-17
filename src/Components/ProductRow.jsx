import React, { Component } from 'react'

export class ProductRow extends Component {
    render() {
        return (
            <tbody>
                {this.props.map((product)=>{
                    return(
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    );
                })}
            </tbody>
        )
    }
}

export default ProductRow
