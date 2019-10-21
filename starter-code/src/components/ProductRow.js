import React, { Component } from 'react'
import '../App.css';

export default class ProductRow extends Component {
    render() {
        return (
          <>
                <tr className="row">
                    <td>{this.props.name}  </td>

                    <td>{this.props.price}</td>
                </tr>
          </>
        )
    }
}