import React, { Component } from 'react'

export default class ProductRow extends Component {


    render() {
        //console.log(this.props);
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
}
