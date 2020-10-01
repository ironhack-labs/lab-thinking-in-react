import React, { Component } from 'react'

export default class ProductRow extends Component {

    constructor(props) {
        super()
        this.state = {
            stocked: true
        }

    }

    render() {

        const name = this.props.stocked ? this.props.name : <span style={{ color: 'red' }}>{this.props.name}</span>
        return (
            <React.Fragment>
                <tr>
                    <td>{name} </td>
                    <td>{this.props.price}</td>
                </tr >
            </React.Fragment>
        )
    }
}