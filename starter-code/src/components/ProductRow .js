import React, { Component } from 'react'

export default class ProductRow extends Component {
    constructor() {
        super()
    }
    hasStock(stocked) {
        if (stocked) {
            return "green"
        } else {
            return "red"
        }

    }
    render() {
        return (
            <React.Fragment>
                <tr className={this.hasStock(this.props.stocked)}>
                    <td>
                        {this.props.name}
                    </td>
                    <td>
                        {this.props.price}
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}
