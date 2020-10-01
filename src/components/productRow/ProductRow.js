import React, { Component } from 'react'
import '../App.css'

class ProductRow extends Component {

    constructor() {
        super()
        this.state = {}
    }


    render() {
        return (
            <>
                <tr>
                    <td className={this.props.className}>{this.props.name} </td>
                    <td>{this.props.price}</td>
                </tr>

            </>
        )
    }
}

export default ProductRow