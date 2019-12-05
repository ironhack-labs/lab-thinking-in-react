import React, { Component } from 'react'

export default class Product extends Component {
  




    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.data.name}
                    </td>
                    <td>{this.props.data.price}</td>
                </tr>
            </React.Fragment>
        )
    }
} 
