import React, { Component } from 'react'

export default class ProductRow extends Component {

    render() {
       
        return (
            <tbody>
                { this.props.products.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td style={{ color : !product.stocked? 'red' : 'black'}}>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    )
                })}
            </tbody>
            
        )
    }
}
