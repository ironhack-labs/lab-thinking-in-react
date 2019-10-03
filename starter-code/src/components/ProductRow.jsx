import React, { Component } from 'react'



export default class ProductRow extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td>{this.props.name}</td>

                    <td>{this.props.price}</td>
                </tr>

            </div>
        )
    }
}

